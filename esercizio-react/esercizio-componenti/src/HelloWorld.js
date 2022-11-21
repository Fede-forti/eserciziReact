import React from "react";
import { NiceDay } from "./NiceDay";

export class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <NiceDay/>
      </div>
    );
  }
}
