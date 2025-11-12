import { useState } from "react"

export default function Form ({addItem}) {

  const [text, setText] = useState("")

  const onClick = (e) => {
    addItem({id: Date.now(), text})
    setText("")
  }

  return(
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control rounded-0" 
          placeholder="Add a new task" 
          value={text}
          onChange={e => setText(e.target.value)}
          />
        <button 
        className="btn btn-success text-white rounded-0 fw-bold"
        onClick={onClick}
        disabled={text.length === 0}
        >
          submit
        </button>
      </div>
      <hr />
    </form>
  )
}