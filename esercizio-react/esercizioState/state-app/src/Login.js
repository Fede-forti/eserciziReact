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
        console.log('Logging in')
    }

    render () {
        return (
            <div>
                <h1> Welcome {this.state.username} </h1>
                <input name='username' value = {this.state.username} onChange={this.formInputChange}></input>
                <input name='password' type= 'password' value = {this.state.password} onChange={this.formInputChange}></input>
                <input name='remember' type='checkbox' checked = {this.state.remember} onChange={this.handleCheckboxChange}></input>
                <button name='loginButton' disabled = {!this.state.username || !this.state.password} onClick={this.onLogin} style= {{
                    backgroundColor: this.state.password.length < 8 ? 'red' : 'green'
                }}>Login</button>
            </div>
        )
    }

}