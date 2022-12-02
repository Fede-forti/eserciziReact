import React, { useState } from "react";

export function ClickCounter({ initialValue = 0 }) {
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

/* export class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  handleCounterIncrement = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <CounterDisplay counter={this.state.count}/>
        <button onClick={this.handleCounterIncrement}>Increment the count</button>
      </div>
    );
  }
}
 */
