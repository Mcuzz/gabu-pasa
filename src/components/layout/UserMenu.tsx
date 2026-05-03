// src/components/layout/UserMenu.tsx
'use client'

import { useState } from 'react'
import { useUserSession } from '@/hooks/useUserSession'

export default function UserMenu() {
  const { profile, loading, signOut, deleteAccount, switchRole } = useUserSession()
  const [open, setOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [switching, setSwitching] = useState(false)

  if (loading || !profile) return null

  const initials = (profile.display_name ?? profile.correo ?? '?')
    .split(' ')
    .map((w: string) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const otherRole = profile.role === 'student' ? 'tutor' : 'student'
  const otherRoleLabel = profile.role === 'student' ? 'Cambiar a Tutor' : 'Cambiar a Estudiante'

  const handleSwitchRole = async () => {
    setSwitching(true)
    await switchRole(otherRole)
    setSwitching(false)
    setOpen(false)
  }

  const handleDeleteAccount = async () => {
    if (!confirmDelete) { setConfirmDelete(true); return }
    await deleteAccount()
  }

  return (
    <div className="relative mt-auto">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => { setOpen(!open); setConfirmDelete(false) }}
        className="flex w-full items-center gap-3 rounded-2xl border border-white/12 bg-white/8 p-3 text-left transition hover:bg-white/14"
      >
        {/* Avatar */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--secondary)] text-sm font-bold text-white">
          {profile.avatar_url
            ? <img src={profile.avatar_url} alt="avatar" className="h-full w-full rounded-full object-cover" />
            : initials}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            {profile.display_name ?? profile.correo?.split('@')[0] ?? 'Usuario'}
          </p>
          <p className="text-xs text-white/60 capitalize">{profile.role === 'student' ? 'Estudiante' : 'Tutor'}</p>
        </div>

        <span className="text-white/50 text-xs">{open ? '▲' : '▼'}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute bottom-full left-0 right-0 mb-2 overflow-hidden rounded-2xl border border-white/12 shadow-xl"
          style={{ background: 'rgba(18, 32, 40, 0.98)', backdropFilter: 'blur(18px)' }}
        >
          {/* Info */}
          <div className="border-b border-white/10 px-4 py-3">
            <p className="text-xs text-white/50">Sesión activa</p>
            <p className="mt-0.5 truncate text-sm font-medium text-white">{profile.correo}</p>
          </div>

          {/* Acciones */}
          <div className="p-2 space-y-1">
            {/* Cambiar rol */}
            <button
              type="button"
              onClick={handleSwitchRole}
              disabled={switching}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10 disabled:opacity-50"
            >
              <span>🔄</span>
              <span>{switching ? 'Cambiando...' : otherRoleLabel}</span>
            </button>

            {/* Cerrar sesión */}
            <button
              type="button"
              onClick={signOut}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10"
            >
              <span>🚪</span>
              <span>Cerrar sesión</span>
            </button>

            {/* Eliminar cuenta */}
            <button
              type="button"
              onClick={handleDeleteAccount}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition
                ${confirmDelete
                  ? 'bg-red-500/20 text-red-300 hover:bg-red-500/30'
                  : 'text-red-400/70 hover:bg-white/10'}`}
            >
              <span>🗑️</span>
              <span>{confirmDelete ? '¿Confirmar? Toca de nuevo' : 'Eliminar cuenta'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}