import { useState } from 'react'
import type { TutorData } from '@/hooks/useRegister'

interface StepTutorProps {
  data: TutorData
  error: string
  loading: boolean
  onChange: (data: Partial<TutorData>) => void
  onSubmit: () => void
}

export default function StepTutor({ data, error, loading, onChange, onSubmit }: StepTutorProps) {
  const [subjectInput, setSubjectInput] = useState('')
  const [skillName, setSkillName] = useState('')
  const [skillLevel, setSkillLevel] = useState(50)

  const addSubject = () => {
    const t = subjectInput.trim()
    if (!t) return
    onChange({ subjects: [...data.subjects, t] })
    setSubjectInput('')
  }

  const removeSubject = (i: number) =>
    onChange({ subjects: data.subjects.filter((_, idx) => idx !== i) })

  const addSkill = () => {
    const t = skillName.trim()
    if (!t) return
    onChange({ skills: [...data.skills, { name: t, level: skillLevel }] })
    setSkillName('')
    setSkillLevel(50)
  }

  const removeSkill = (i: number) =>
    onChange({ skills: data.skills.filter((_, idx) => idx !== i) })

  return (
    <div className="register-step">
      <div className="step-header">
        <div className="step-pill">Paso 2 de 2 — Tutor</div>
        <h2>Tu perfil de tutor</h2>
        <p>Cuéntanos sobre ti para que los estudiantes puedan encontrarte.</p>
      </div>

      <div className="fields-grid">
        <div className="field-group">
          <label className="field-label">Nombre completo</label>
          <input className="field-input" type="text" placeholder="Tu nombre"
            value={data.name} onChange={(e) => onChange({ name: e.target.value })} />
        </div>

        <div className="field-group">
          <label className="field-label">Nivel educativo</label>
          <input className="field-input" type="text" placeholder="Ej: Maestría"
            value={data.educationLevel} onChange={(e) => onChange({ educationLevel: e.target.value })} />
        </div>

        <div className="field-group">
          <label className="field-label">Carrera</label>
          <input className="field-input" type="text" placeholder="Ej: Ingeniería Civil"
            value={data.carrera} onChange={(e) => onChange({ carrera: e.target.value })} />
        </div>

        <div className="field-group">
          <label className="field-label">Semestre</label>
          <input className="field-input" type="text" placeholder="Ej: 8"
            value={data.semestre} onChange={(e) => onChange({ semestre: e.target.value })} />
        </div>

        <div className="field-group">
          <label className="field-label">Teléfono</label>
          <input className="field-input" type="tel" placeholder="Ej: 6621234567"
            value={data.telefono} onChange={(e) => onChange({ telefono: e.target.value })} />
        </div>
      </div>

      {/* Descripción */}
      <div className="field-group">
        <label className="field-label">Descripción</label>
        <textarea className="field-input field-textarea" placeholder="Cuéntanos sobre tu experiencia como tutor..."
          value={data.description} onChange={(e) => onChange({ description: e.target.value })} />
      </div>

      {/* Materias */}
      <div className="field-group">
        <label className="field-label">Materias que impartes</label>
        <div className="tag-input-row">
          <input className="field-input" type="text" placeholder="Ej: Álgebra lineal"
            value={subjectInput} onChange={(e) => setSubjectInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addSubject()} />
          <button className="btn-tag-add" type="button" onClick={addSubject}>+</button>
        </div>
        <div className="tags-wrap">
          {data.subjects.map((s, i) => (
            <span key={i} className="tag">
              {s} <button type="button" onClick={() => removeSubject(i)}>×</button>
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="field-group">
        <label className="field-label">Habilidades</label>
        <div className="skill-input-row">
          <input className="field-input" type="text" placeholder="Nombre de habilidad"
            value={skillName} onChange={(e) => setSkillName(e.target.value)} />
          <div className="skill-slider-wrap">
            <span className="skill-level-label">{skillLevel}%</span>
            <input type="range" min={0} max={100} value={skillLevel}
              onChange={(e) => setSkillLevel(Number(e.target.value))} className="skill-slider" />
          </div>
          <button className="btn-tag-add" type="button" onClick={addSkill}>+</button>
        </div>
        <div className="skills-wrap">
          {data.skills.map((s, i) => (
            <div key={i} className="skill-chip">
              <span>{s.name}</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar" style={{ width: `${s.level}%` }} />
              </div>
              <span className="skill-pct">{s.level}%</span>
              <button type="button" onClick={() => removeSkill(i)}>×</button>
            </div>
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