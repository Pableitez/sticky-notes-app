import { createContext, useState } from "react"

// Contexto para el color por defecto de las notas
// Lo usamos para que cualquier componente pueda leer/cambiar el color global
export const ColorContext = createContext(null)

export function ColorProvider({ children }) {
  // Color inicial tipo post-it amarillo
  const [defaultColor, setDefaultColor] = useState("#fff59d")

  return (
    <ColorContext.Provider value={{ defaultColor, setDefaultColor }}>
      {children}
    </ColorContext.Provider>
  )
}
