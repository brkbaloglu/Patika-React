import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div>
      {isVisible && <Counter></Counter>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
