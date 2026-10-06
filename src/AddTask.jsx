import { useState } from 'react'
import './AddTask.css'

function AddTask({ onBack }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('Vidutinis')

  const handleSubmit = (event) => {
    event.preventDefault()
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
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Įrašyk užduoties pavadinimą"
              required
            />
          </label>

          <label className="add-task-field">
            <span>Data</span>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
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
