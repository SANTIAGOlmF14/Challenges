import React from 'react';
import './App.css';
import useCounter from './hooks/useCounter';

function App() {
  const counter = useCounter();

  return (
    <div className="App">
      <h1>Counter: {counter.count}</h1>
      <button onClick={counter.increment}>Increment</button>
      <button onClick={counter.decrement}>Decrement</button>
      <button onClick={counter.reset}>Reset</button>
    </div>
  );
}

export default App;






