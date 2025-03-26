import React from "react";
import Counter from "./components/counter";

const App = () => {
  return (
    <div className="App" style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      backgroundColor: "#EFEFEF" }}>
      <Counter initialCount={5} />
    </div>
  );
};

export default App;
