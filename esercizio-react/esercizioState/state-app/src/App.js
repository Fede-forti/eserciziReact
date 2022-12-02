import React from 'react'
import { Sum } from './Sum'

export class App extends React.Component{
    render() {
        return (
            <div>
                <Sum a={3} b={15}/>
            </div>
        )
    }
}