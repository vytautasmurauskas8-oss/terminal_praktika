import { useState } from 'react'
import './AddTask.css'

function AddTask({ onBack, onAddTask }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('Vidutinis')
  const [errors, setErrors] = useState({ title: '', date: '' })

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {
      title: title.trim() ? '' : 'Įvesk užduoties pavadinimą.',
      date: date ? '' : 'Pasirink užduoties datą.',
    }

    setErrors(nextErrors)

    if (nextErrors.title || nextErrors.date) return

    onAddTask({ title: title.trim(), date, priority })
  }

  return (
    <main className="add-task-page">
      <section className="add-task-card" aria-labelledby="add-task-heading">
        <p className="eyebrow">Tavo planas</p>
        <h1 id="add-task-heading">Nauja užduotis</h1>
        <p className="add-task-description">Sukurk naują užduotį savo planui</p>
        <form className="add-task-form" onSubmit={handleSubmit}>
          <label className="add-task-field">
            <span>Užduoties pavadinimas</span>
            <input
              type="text"
              value={title}
              onChange={(event) => {
                const value = event.target.value
                setTitle(value)
                if (value.trim()) setErrors((current) => ({ ...current, title: '' }))
              }}
              placeholder="Įrašyk užduoties pavadinimą"
              aria-invalid={Boolean(errors.title)}
              aria-describedby={errors.title ? 'task-title-error' : undefined}
            />
            {errors.title && <span className="add-task-error" id="task-title-error" role="alert">{errors.title}</span>}
          </label>

          <label className="add-task-field">
            <span>Data</span>
            <input
              type="date"
              value={date}
              onChange={(event) => {
                const value = event.target.value
                setDate(value)
                if (value) setErrors((current) => ({ ...current, date: '' }))
              }}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? 'task-date-error' : undefined}
            />
            {errors.date && <span className="add-task-error" id="task-date-error" role="alert">{errors.date}</span>}
          </label>

          <label className="add-task-field">
            <span>Prioritetas</span>
            <select value={priority} onChange={(event) => setPriority(event.target.value)}>
              <option>Žemas</option>
              <option>Vidutinis</option>
              <option>Aukštas</option>
            </select>
          </label>

          <button className="add-task-submit" type="submit">Pridėti užduotį</button>
        </form>
        <button className="add-task-back" type="button" onClick={onBack}>Grįžti</button>
      </section>
    </main>
  )
}

export default AddTask
