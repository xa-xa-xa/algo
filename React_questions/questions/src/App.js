import './App.css';
import {useEffect, useState} from 'react'

function App() {


  const clicked = () => {
    console.log("CLICKED")
  };

  const [value, setValue] = useState(0)
  const [debouncedValue, setDebouncedValue] = useState(0)
  //* Debounce
  const useDebouncedEffect = (effect, delay, deps) => {
    useEffect(() => {
      const handler = setTimeout(() => effect(), delay);

      return () => clearTimeout(handler);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps || [], delay]);
  }

  useDebouncedEffect(() => setDebouncedValue(value), 1000, [value]);


  //* Throttle
  return (
    <div className="App">
      <header className="App-header">

        <h1>{value}</h1>
        <button onClick={(e) => setValue(value + 1)}>Click</button>
        <h1>d: {debouncedValue}</h1>



      </header>
    </div >
  );
}

export default App;
