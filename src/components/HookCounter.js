import React, { useState } from "react";

const HookCounter = () => {
  // Here we use the useState Hook. 
  // 'count' is the state variable, and 'setCount' is the function to update it.
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter using useState Hook</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Count: {count}</p>

      {/* We update the state by calling setCount */}
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px", padding: "10px" }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "5px", padding: "10px" }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ margin: "5px", padding: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default HookCounter;