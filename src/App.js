import "./index.css";
import { useState, useMemo } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const newDate = useMemo(() => {
    const currentDate = new Date();
    return currentDate.setDate(currentDate.getDate() + count);
  }, [count]);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          value={step}
          min="0"
          max="20"
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> Step: {step} </span>
      </div>
      <br></br>
      <div>
        <button onClick={() => setCount((cnt) => cnt - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((cnt) => cnt + step)}>+</button>
      </div>
      <br></br>
      <div>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was}`}
        <span>{new Date(newDate).toDateString()}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
