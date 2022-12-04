
import React from "react";
import { HelloWorld } from "./HelloWorld";


export function Welcome(props) {
  return (
    <div>
      {props.name ? <h2>Hello, {props.name}</h2> : <HelloWorld/>}
      
    </div>
  )
}

