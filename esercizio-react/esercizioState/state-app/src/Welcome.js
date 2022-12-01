import React from "react";
import { Container } from "./Container";

export class Welcome extends React.Component {
  render() {
    return (
      <Container> 
        {(title) => {
          return <h1> Il titolo è '{title}'</h1>
        }}
      </Container>

    )
  }
}