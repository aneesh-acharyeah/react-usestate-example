import React, { useState } from 'react';
import './App.css';



function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([0]);

  const increment = () => {
    setCount(prev => {
      const newCount = prev + step;
      setHistory([...history, newCount]);
      return newCount;
    })
  }
  const decrement = () => {
    setCount(prev => {
      const newCount = prev - step;
      setHistory([...history, newCount]);
      return newCount;
    })
  }
  const reset = () => {
    setCount(0);
    setHistory([0]);
  }

  const handleStepChange = (event) => {
    const value = Number(event.target.value);
    setStep(value);
  }


  return (
    <div className="App">
      <h1> 🔢 Counter App</h1>
      <h2>{count}</h2>
      <div className="container">
        <div>
          <button onClick={increment}>➕  Increment</button>
          <button onClick={decrement}>➖  Decrement</button>
          <button onClick={reset}>🔄  Reset</button>
        </div>
        <div>
          <label>Step: </label>
          <input type="number" value={step} onChange={handleStepChange} min="1" />
        </div>
        <div>
          <h3>History:</h3>
          <ul>
            {history.map((item, index) => (
              <li className='history-item' key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
