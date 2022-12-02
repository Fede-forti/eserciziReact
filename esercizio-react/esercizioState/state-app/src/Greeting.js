import React from "react";
import { Welcome } from "./Welcome";

export class Greeting extends React.Component {
  render() {
    return (
      <div>
        <Welcome name='Federica'/>
      </div>
    );
  }
}
