import React from "react"; 
import { CarDetails } from "./CarDetails";

export class App extends React.Component {
    render() {
        return (
            <div>
                <CarDetails initialData={{ model: "Fiat Panda", year: "2007", color: "Grey" }}/>
            </div>
        )
    }
}