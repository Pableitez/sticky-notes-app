import { useState, useContext } from "react"
import { ColorContext } from "../context/ColorContext"
import useNotes from "../hooks/useNotes"
import Note from "./Note"

// Tablero: formulario para nueva nota + lista de notas
function NoteBoard() {
  const [inputText, setInputText] = useState("")
  const { defaultColor } = useContext(ColorContext)
  const { notes, addNote, deleteNote, maxReached } = useNotes()

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = inputText.trim()
    // validación: no permitir nota vacía (bonus)
    if (!trimmed) return
    if (maxReached) return
    addNote(trimmed, defaultColor)
    setInputText("")
  }

  return (
    <div className="note-board">
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe tu nota..."
          maxLength={200}
          disabled={maxReached}
        />
        <button type="submit" disabled={maxReached}>
          Añadir nota
        </button>
      </form>
      {maxReached && (
        <p className="limit-message">Máximo 10 notas. Borra alguna para añadir más.</p>
      )}
      {notes.length === 0 ? (
        <p className="empty-message">Aún no hay notas. ¡Crea la primera!</p>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </div>
      )}
    </div>
  )
}

export default NoteBoard
