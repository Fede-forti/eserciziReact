import React from "react"; 
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Counter/>
                {/* <ClickCounter onCounterChange= {(counter) => {
                    return console.log(`The count is ${counter}`)
                }}/> */}
            </div>
        )
    }
}