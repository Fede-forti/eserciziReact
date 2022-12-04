import React, { useState } from "react";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState (initialValue)

  function handleCounterIncrement() {
    setCounter((c) => {
      return c + 1
      });
  }

  return (
    <div>
      <h2>Counter: {counter} </h2>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}