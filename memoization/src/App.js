import './App.css';
import { useState, useMemo, useCallback } from 'react'
import Header from './components/Header';



function App() {

  const [number, setNumber] = useState()
  const [text, setText] = useState()
  // // const data = useMemo(() => {
  // //   return calculateObject()
  // // }, [])
  // const data = calculateObject()

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, [])

  return (
    <div className="App">
      {/* <Header number={number < 5 ? 0 : number} data={data}></Header> */}
      <Header increment={increment}></Header>
      <hr />
      <h1>{number}</h1>
      <br /><br />
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
    </div>
  );
}

// function calculateObject(){
//   console.log("Calculating...");
//   for (let i = 0; i < 100000000; i++) {
//     return {name: "Mehmet"}
//   }
//   console.log("Calculating completed!");
// }

export default App;
