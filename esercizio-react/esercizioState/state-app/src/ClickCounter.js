import React, { useState, useEffect } from "react";
import { Counter } from "./Counter";

export function ClickCounter(props, { initialValue = 0 }) {
  const [counter, setCounter] = useState (initialValue)

  useEffect(()=> {
    props.onCounterChange(counter)
  }, [counter, props]);

  function handleCounterIncrement() {
    setCounter((c) => {
      return c + 1
      });
  }

  return (
    <div>
      
      <h2>Counter: {counter} </h2>
      <button onClick={handleCounterIncrement}>Increment</button>
      <Counter/>
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
