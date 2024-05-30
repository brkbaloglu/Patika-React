import React from 'react'

function Header({number, increment}) {
    console.log("Header component re-rendered");
  return (
    <div>
    <div>Header - {number}</div>
    {/* <code>{JSON.stringify(data)}</code> */}
    <button onClick={increment}>Click</button>

    </div>
)
}

export default React.memo(Header)