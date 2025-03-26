import React, { 
  useState, 
  useEffect 
} from "react";
import Button from "../button";

const Counter = ({ initialCount = 0 }) => {

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? Number(savedCount) : initialCount;
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <div style={{ 
      textAlign: "center"
    }}>
      <h1 style={{  
          textAlign: "center", 
          fontSize: "40px" 
        }}>Sayaç: {count}</h1>

      <input 
        type="number" 
        value={step} 
        onChange={(e) => setStep(Number(e.target.value))}
        style={{ 
          width: "50px",
          marginBottom: "10px", 
          textAlign: "center", 
          fontSize: "25px" 
        }}
      />

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "10px" 
      }}>
        <Button title="+" onClick={increment} />
        <Button title="-" onClick={decrement} />
        <Button title="Reset" onClick={reset} color="#FF9800" />
      </div>
    </div>
  );
};

export default Counter;
