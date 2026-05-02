import { useState } from 'react'
import type { StudentData } from '@/hooks/useRegister'

interface StepStudentProps {
  data: StudentData
  error: string
  loading: boolean
  onChange: (data: Partial<StudentData>) => void
  onSubmit: () => void
}

export default function StepStudent({ data, error, loading, onChange, onSubmit }: StepStudentProps) {
  const [needInput, setNeedInput] = useState('')
  const [interestInput, setInterestInput] = useState('')

  const addTag = (field: 'needs' | 'interests', value: string, clear: () => void) => {
    const trimmed = value.trim()
    if (!trimmed) return
    onChange({ [field]: [...data[field], trimmed] })
    clear()
  }

  const removeTag = (field: 'needs' | 'interests', index: number) => {
    onChange({ [field]: data[field].filter((_, i) => i !== index) })
  }

  return (
    <div className="register-step">
      <div className="step-header">
        <div className="step-pill">Paso 2 de 2 — Estudiante</div>
        <h2>Tu perfil académico</h2>
        <p>Esta información nos ayuda a conectarte con los tutores ideales.</p>
      </div>

      <div className="fields-grid">
        <div className="field-group">
          <label className="field-label">Nombre completo</label>
          <input className="field-input" type="text" placeholder="Tu nombre"
            value={data.name} onChange={(e) => onChange({ name: e.target.value })} />
        </div>

        <div className="field-group">
          <label className="field-label">Nivel educativo</label>
          <input className="field-input" type="text" placeholder="Ej: Licenciatura"
            value={data.level} onChange={(e) => onChange({ level: e.target.value })} />
        </div>

        <div className="field-group">
          <label className="field-label">Carrera</label>
          <input className="field-input" type="text" placeholder="Ej: Ingeniería en Sistemas"
            value={data.carrera} onChange={(e) => onChange({ carrera: e.target.value })} />
        </div>

        <div className="field-group">
          <label className="field-label">Semestre</label>
          <input className="field-input" type="text" placeholder="Ej: 5"
            value={data.semestre} onChange={(e) => onChange({ semestre: e.target.value })} />
        </div>

        <div className="field-group">
          <label className="field-label">Teléfono</label>
          <input className="field-input" type="tel" placeholder="Ej: 6621234567"
            value={data.telefono} onChange={(e) => onChange({ telefono: e.target.value })} />
        </div>
      </div>

      {/* Necesidades */}
      <div className="field-group">
        <label className="field-label">Necesidades de aprendizaje</label>
        <div className="tag-input-row">
          <input className="field-input" type="text" placeholder="Ej: Cálculo diferencial"
            value={needInput} onChange={(e) => setNeedInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTag('needs', needInput, () => setNeedInput(''))} />
          <button className="btn-tag-add" type="button"
            onClick={() => addTag('needs', needInput, () => setNeedInput(''))}>+</button>
        </div>
        <div className="tags-wrap">
          {data.needs.map((n, i) => (
            <span key={i} className="tag">
              {n} <button type="button" onClick={() => removeTag('needs', i)}>×</button>
            </span>
          ))}
        </div>
      </div>

      {/* Intereses */}
      <div className="field-group">
        <label className="field-label">Intereses</label>
        <div className="tag-input-row">
          <input className="field-input" type="text" placeholder="Ej: Programación, Matemáticas"
            value={interestInput} onChange={(e) => setInterestInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTag('interests', interestInput, () => setInterestInput(''))} />
          <button className="btn-tag-add" type="button"
            onClick={() => addTag('interests', interestInput, () => setInterestInput(''))}>+</button>
        </div>
        <div className="tags-wrap">
          {data.interests.map((n, i) => (
            <span key={i} className="tag">
              {n} <button type="button" onClick={() => removeTag('interests', i)}>×</button>
            </span>
          ))}
        </div>
      </div>

      {error && <p className="login-error">{error}</p>}

      <button className="btn-primary" type="button" onClick={onSubmit} disabled={loading}>
        {loading ? 'Creando cuenta...' : 'Crear cuenta →'}
      </button>
    </div>
  )
}