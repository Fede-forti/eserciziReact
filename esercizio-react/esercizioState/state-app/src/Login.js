import React from 'react'

export class Login extends React.Component {
    state = {
        username : '',
        password : '',
        remember : false,
        loginButton : true,
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

    onLogin = () => {
        // dalla traccia non capisco cosa deve fare questa funzione
    }

    handleResetState = () => {
        this.setState({
            username : '',
            password : '',
            remember : false
        })
    }

    render () {
        return (
            <div>
                <h1> Welcome {this.state.username} </h1>
                <input name='username' value = {this.state.username} onChange={this.formInputChange}></input>
                <input name='password' type= 'password' value = {this.state.password} onChange={this.formInputChange}></input>
                <input name='remember' type='checkbox' checked = {this.state.remember} onChange={this.handleCheckboxChange}></input>
                <button name='loginButton' disabled = {!this.state.username || !this.state.password} onClick={this.onLoginS}>Login</button>
                <button onClick={this.handleResetState}>Reset</button>
            </div>
        )
    }

}