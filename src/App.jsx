import { useState } from 'react'
import './App.css'

const monthNames = new Intl.DateTimeFormat('lt-LT', { month: 'long', year: 'numeric' })
const weekDays = ['Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št', 'Sk']

function App() {
  const today = new Date()
  const [displayedMonth, setDisplayedMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState(today.getDate())

  const shiftMonth = (offset) => {
    setDisplayedMonth((month) => new Date(month.getFullYear(), month.getMonth() + offset, 1))
    setSelectedDate(null)
  }

  const firstWeekday = (new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), 1).getDay() + 6) % 7
  const daysInMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 0).getDate()
  const days = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)]

  return (
    <main className="app-main">
      <header className="app-header">
        <h1 className="title-outline">To Do List!</h1>
      </header>

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
    </main>
  )
}

export default App
