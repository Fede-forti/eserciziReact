import React from 'react'
import { Welcome } from './Welcome'

export class InteractiveWelcome extends React.Component {

    state = {
        username : ''
    }

    usernameInputChange = (event) => {

        const value = event.target.value

        this.setState({
            username : value,
        })
        
    }


    render() {
        return (
            <div>
                <Welcome name={this.state.username} />
                <input name='username' value = {this.state.username} onChange={this.usernameInputChange}></input>
            </div>
        )
    }
}