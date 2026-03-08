import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const STORAGE_KEY = "sticky-notes-app"
const MAX_NOTES = 10 // bonus: límite de 10 notas

// Hook personalizado que maneja añadir y borrar notas
// Cada nota tiene id (único), text y color
function useNotes() {
  // Cargamos desde localStorage al montar, si hay algo guardado
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        return Array.isArray(parsed) ? parsed : []
      }
    } catch (e) {
      console.warn("Error leyendo notas del localStorage", e)
    }
    return []
  })

  // Guardamos en localStorage cada vez que cambian las notas
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
    } catch (e) {
      console.warn("Error guardando notas en localStorage", e)
    }
  }, [notes])

  function addNote(text, color) {
    if (notes.length >= MAX_NOTES) return
    const newNote = {
      id: uuidv4(),
      text,
      color,
    }
    setNotes((prev) => [...prev, newNote])
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  return { notes, addNote, deleteNote, maxReached: notes.length >= MAX_NOTES }
}

export default useNotes
