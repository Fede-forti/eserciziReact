import React from "react";
import { HelloWorld } from "./HelloWorld";

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>La mia app renderizzata</h1>
                <HelloWorld/>
            </div>
        )
    }
}