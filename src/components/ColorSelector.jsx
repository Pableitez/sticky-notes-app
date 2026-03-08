import { useContext } from "react"
import { ColorContext } from "../context/ColorContext"

// Selector que cambia el color por defecto del contexto
// Así las nuevas notas salen con el color que elijamos
function ColorSelector() {
  const { defaultColor, setDefaultColor } = useContext(ColorContext)

  return (
    <div className="color-selector">
      <label htmlFor="default-color">Color por defecto: </label>
      <input
        id="default-color"
        type="color"
        value={defaultColor}
        onChange={(e) => setDefaultColor(e.target.value)}
      />
      <span className="color-preview" style={{ backgroundColor: defaultColor }} />
    </div>
  )
}

export default ColorSelector
