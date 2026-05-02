'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useCompleteProfile } from '@/hooks/useCompleteProfile'
import StepStudent from '@/components/auth/StepStudent'
import StepTutor from '@/components/auth/StepTutor'
import '@/app/login/login.css'
import '@/app/register/register.css'

function CompleteContent() {
  const searchParams = useSearchParams()
  const role = (searchParams.get('role') as 'student' | 'tutor') ?? 'student'

  const { studentData, tutorData, loading, error,
    setStudentData, setTutorData, handleSubmit } = useCompleteProfile(role)

  return (
    <main className="login-page">
      {role === 'student'
        ? <StepStudent data={studentData} error={error} loading={loading}
            onChange={setStudentData} onSubmit={handleSubmit} />
        : <StepTutor data={tutorData} error={error} loading={loading}
            onChange={setTutorData} onSubmit={handleSubmit} />
      }
    </main>
  )
}

export default function CompletePage() {
  return <Suspense><CompleteContent /></Suspense>
}