import React from "react"; 
import { Githubuser } from "./GithubUser";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Githubuser username='Fede-forti'/>
                {/* <ClickCounter onCounterChange= {(counter) => {
                    return console.log(`The count is ${counter}`)
                }}/> */}
            </div>
        )
    }
}