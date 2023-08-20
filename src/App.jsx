import { useState, useEffect } from "react"

export default function App() {
  const [input, setInput] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log(input)
    console.log("Atualizado com sucesso...")
  }, [input]) 

  function inputUpdate() {
    const newValueInput = inputValue

    setInput([...input, newValueInput])
    return
  }

  return(
    <div className="div-container">
      <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={inputUpdate}>click me</button>
    </div>
  )
}