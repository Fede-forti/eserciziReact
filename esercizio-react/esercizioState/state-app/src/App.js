import React from "react"; 
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
    render() {
        return (
            <div>
                <ClickCounter onCounterChange= {(counter) => {
                    return console.log(`The count is ${counter}`)
                }}/>
            </div>
        )
    }
}