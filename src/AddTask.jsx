import './AddTask.css'

function AddTask({ onBack }) {
  return (
    <main className="add-task-page">
      <section className="add-task-card" aria-labelledby="add-task-heading">
        <p className="eyebrow">Tavo planas</p>
        <h1 id="add-task-heading">Nauja užduotis</h1>
        <p className="add-task-description">Sukurk naują užduotį savo planui</p>
        <button className="add-task-back" type="button" onClick={onBack}>Grįžti</button>
      </section>
    </main>
  )
}

export default AddTask
