import React from 'react'
import { Login } from './Login'

export class InteractiveWelcome extends React.Component {   

    render() {
        return (
            <div>
                <Login name={this.props.name}/>
            </div>
        )
    }
}