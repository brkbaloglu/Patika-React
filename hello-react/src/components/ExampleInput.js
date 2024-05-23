import React, { useState } from 'react'

function ExampleInput() {
  const [name, setName] = useState("name")
   const onChangeName = (event) => {
     setName(event.target.value)
   }
  return (
    <div>
        <input type="text" value={name} onChange={onChangeName}/>
        <br />
        {name}
    </div>
  )
}

export default ExampleInput