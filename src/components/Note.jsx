// Componente de una sola nota, muestra texto, color y botón eliminar
function Note({ note, onDelete }) {
  return (
    <div
      className="note"
      style={{ backgroundColor: note.color }}
    >
      <p className="note-text">{note.text}</p>
      <button
        type="button"
        className="note-delete"
        onClick={() => onDelete(note.id)}
        aria-label="Eliminar nota"
      >
        ✕
      </button>
    </div>
  )
}

export default Note
