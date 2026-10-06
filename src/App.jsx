import { useState } from 'react'
import './App.css'
import AddTask from './AddTask.jsx'

const monthNames = new Intl.DateTimeFormat('lt-LT', { month: 'long', year: 'numeric' })
const fullDateFormat = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
const weekDays = ['Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št', 'Sk']
const initialTasks = [
  { id: 1, title: 'Paruošti savaitės planą', date: '2026-10-06', priority: 'Vidutinis', status: 'done', label: 'Atlikta' },
  { id: 2, title: 'Peržiūrėti projekto užduotis', date: '2026-10-06', priority: 'Aukštas', status: 'pending', label: 'Neatlikta' },
  { id: 3, title: 'Išsiųsti mėnesio ataskaitą', date: '2026-10-06', priority: 'Žemas', status: 'overdue', label: 'Vėluoja' },
]

function App() {
  const today = new Date()
  const [displayedMonth, setDisplayedMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState(today.getDate())
  const [currentPage, setCurrentPage] = useState('home')
  const [tasks, setTasks] = useState(initialTasks)
  const selectedDateValue = selectedDate
    ? fullDateFormat.format(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), selectedDate))
    : null
  const selectedTasks = tasks.filter((task) => task.date === selectedDateValue)

  const addTask = ({ title, date, priority }) => {
    setTasks((currentTasks) => {
      const nextId = currentTasks.reduce((largestId, task) => (
        typeof task.id === 'number' ? Math.max(largestId, task.id) : largestId
      ), 0) + 1

      return [
        ...currentTasks,
        {
          id: nextId,
          title,
          date,
          priority,
          status: 'pending',
          label: 'Neatlikta',
        },
      ]
    })
    setCurrentPage('home')
  }

  const shiftMonth = (offset) => {
    setDisplayedMonth((month) => new Date(month.getFullYear(), month.getMonth() + offset, 1))
    setSelectedDate(null)
  }

  const firstWeekday = (new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), 1).getDay() + 6) % 7
  const daysInMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 0).getDate()
  const days = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)]

  if (currentPage === 'add-task') {
    return <AddTask onBack={() => setCurrentPage('home')} onAddTask={addTask} initialDate={selectedDateValue ?? ''} />
  }

  return (
    <main className="app-main">
      <header className="app-header">
        <h1 className="title-outline">To Do List!</h1>
        <button className="new-task-button" type="button" onClick={() => setCurrentPage('add-task')}>
          + Nauja užduotis
        </button>
      </header>

      <div className="planner-layout">
        <aside className="tasks-section" aria-labelledby="tasks-heading">
          <div className="tasks-heading">
            <div>
              <p className="eyebrow">Tavo darbai</p>
              <h2 id="tasks-heading">{selectedDate ? 'Užduotys' : 'Pasirink dieną'}</h2>
            </div>
            {selectedDate && <span className="task-count">{selectedTasks.length}</span>}
          </div>
          {selectedTasks.length > 0 ? (
            <ul className="task-list">
            {selectedTasks.map((task) => (
              <li className={`task-item task-${task.status}`} key={task.id}>
                <span className="task-indicator" aria-hidden="true">{task.status === 'done' ? '✓' : '•'}</span>
                <span className="task-title">{task.title}</span>
                <span className="task-status">{task.label}</span>
                <span className="task-priority">Prioritetas: {task.priority}</span>
              </li>
            ))}
            </ul>
          ) : (
            <p className="task-empty-state">{selectedDate ? 'Šiai dienai užduočių nėra.' : 'Pasirink kalendoriuje dieną.'}</p>
          )}
          {selectedTasks.length > 0 && <div className="task-legend" aria-label="Užduočių būsenos">
            <span><i className="legend-dot legend-done" />Atlikta</span>
            <span><i className="legend-dot legend-pending" />Neatlikta</span>
            <span><i className="legend-dot legend-overdue" />Vėluoja</span>
          </div>}
        </aside>

      <section className="calendar-section" aria-label="Kalendorius">
        <div className="calendar-heading">
          <div>
            <p className="eyebrow">Planuok savo dienas</p>
            <h2>{monthNames.format(displayedMonth)}</h2>
          </div>
          <div className="calendar-navigation">
            <button type="button" aria-label="Ankstesnis mėnuo" onClick={() => shiftMonth(-1)}>‹</button>
            <button type="button" aria-label="Kitas mėnuo" onClick={() => shiftMonth(1)}>›</button>
          </div>
        </div>

        <div className="calendar-grid" role="grid" aria-label={monthNames.format(displayedMonth)}>
          {weekDays.map((day) => <span className="weekday" key={day}>{day}</span>)}
          {days.map((day, index) => day ? (
            <button
              className={`calendar-day${selectedDate === day ? ' selected' : ''}${today.getFullYear() === displayedMonth.getFullYear() && today.getMonth() === displayedMonth.getMonth() && today.getDate() === day ? ' today' : ''}`}
              type="button"
              key={day}
              aria-pressed={selectedDate === day}
              onClick={() => setSelectedDate(day)}
            >{day}</button>
          ) : <span className="calendar-empty" key={`empty-${index}`} aria-hidden="true" />)}
        </div>
        <p className="selected-date">{selectedDate ? `${selectedDate} ${new Intl.DateTimeFormat('lt-LT', { month: 'long' }).format(displayedMonth)}` : 'Pasirink dieną'}</p>
      </section>
      </div>
    </main>
  )
}

export default App
