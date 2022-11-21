import React from "react";
import { Welcome } from "./Welcome";

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
