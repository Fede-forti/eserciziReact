import React from 'react'
import { Welcome } from './Welcome'

export class InteractiveWelcome extends React.Component {

    state = {
        username : '',
        password : '',
        remember : false
    }

    formInputChange = (event) => {

        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name] : value,
        })
        
    }

    handleCheckboxChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked

        this.setState({
            [name] : checked
        })
    }

    


    render() {
        return (
            <div>
                <Welcome name={this.state.username} />
                <input name='username' value = {this.state.username} onChange={this.formInputChange}></input>
                <input name='password' type= 'password' value = {this.state.password} onChange={this.formInputChange}></input>
                <input name='remember' type='checkbox' checked = {this.state.remember} onChange={this.handleCheckboxChange}></input>
            </div>
        )
    }
}