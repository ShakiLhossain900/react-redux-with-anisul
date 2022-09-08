import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const incremnetHandller = () => {
    setcount((count) => count + 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h3>count : {count}</h3>
      <button type="btn" onClick={incremnetHandller}>
        Increment
      </button>
    </div>
  );
};

export default Counter;



//1. state count:0
//2. actions increment decrement reset
//3. reducer increment -> count = count + 1
              //decrement -> count = count-1
              //reset -> count -> 0
//store 
