import React, {
    Component,
    useState
} from "react";
import {
    Button
} from "./components";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const artir = () => {
      setCounter(counter + Number(step));
  }

  const azalt = () => {
      setCounter(counter - Number(step));
  }

  return <div style={{
            backgroundColor: " #EFEFEF",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100vh"
        }}>
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            display: "flex",
            borderRadius: 6,
            top: "300px",
            fontSize: 60,
            height: 100,
            width: 100,
        }}>
          {counter}
        </div>
        <div style={{
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
            gap: "20px",
        }}>
        <button onClick={azalt} style={{
            backgroundColor: "#7fa19f",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            display: "flex",
            border: "none",
            fontSize: 60,
            height: 60,
            width: 60,
        }}>-</button>

        <button onClick={artir} style={{
            backgroundColor: "#7fa19f",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            display: "flex",
            border: "none",
            fontSize: 50,
            height: 60,
            width: 60,
        }}>+</button>
        <input 
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={{
                backgroundColor: "#7fa19f",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                display: "flex",
                border: "none",
                fontSize: 50,
                height: 60,
                width: 60,
            }}/>
        </div>
  </div>;
};
export default App;
