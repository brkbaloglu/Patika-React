import React, { useState } from 'react'
const defaultItems = [{
    name: "Item1"
},{
    name: "Item2"
},{
    name: "Item3"
}]
function Todo() {
    const [text, setText] = useState("")
    const [items, setItems] = useState(defaultItems)

    const addItem = () => {
        setItems([...items, { name: text }])
        setText("")
    }
  return (
    <div>
        <label htmlFor="">
            Text
            <input title='text' type="text" value={text} onChange={(event) => setText(event.target.value)} />
        </label>
        <button onClick={addItem}>Add</button>
        <br /><br />
        {items.map((item, index) => (
            <div key={index}>{item.name}</div>
        ))}
    </div>
  )
}

export default Todo