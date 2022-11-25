import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {
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
