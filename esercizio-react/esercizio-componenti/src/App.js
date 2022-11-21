import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>La mia app renderizzata</h1>
        <Welcome name="Federica" />
      </div>
    );
  }
}
