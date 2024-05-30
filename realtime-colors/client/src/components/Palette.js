import React, { useState } from 'react'
import { send } from '../socketApi'

function Palette({activeColor}) {
    const [color, setColor] = useState("")
  return (
    <div className='palette'>
        <input type="color" name="" onChange={(event) => setColor(event.target.value)} value={activeColor} id="" />
        <button onClick={() => send(color)}>Click</button>
    </div>
  )
}

export default Palette