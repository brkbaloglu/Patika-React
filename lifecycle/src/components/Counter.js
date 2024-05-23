import React, { useEffect, useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0)
  const [name, setName] = useState("Mehmet")
  useEffect(() => {
    console.log("Component mount edildi");
    
    const interval = setInterval(() => {
        setNumber((number) => number + 1)
    }, 1000);

    return () => clearInterval(interval);
  })

  useEffect(() => {
    console.log("Number state güncellendi");
  }, [number])
  return (
    <div className="App">
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>
    <hr />
    <h1>{name}</h1>
    <button onClick={() => setName("Mete")}>Click</button>

  </div>
  )
}

export default Counter