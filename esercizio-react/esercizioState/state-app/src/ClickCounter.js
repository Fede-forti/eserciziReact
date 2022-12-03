import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue)

  function handleCounterIncrement() {
    setCounter((c) => {
      return c + 1});
  }

  function handleCounterDecrement() {
    setCounter((c) => {
      return c - 1});
  }

  function handleCounterReset() {
    setCounter(initialValue)
  }

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset
  }

}

export function ClickCounter({ initialValue = 0 }) {
const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)  

  return (
    <div>
      
      <h2>Counter: {counter} </h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
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
