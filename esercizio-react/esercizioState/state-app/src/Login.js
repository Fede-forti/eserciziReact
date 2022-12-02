import React, { useState } from 'react'


export function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange (event) {
        const { name, type, value , checked } = event.target
    
        setData((data) => {
            return {
                ...data,
            [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    console.log(data)

    return (
        <div>
            <input onChange={handleInputChange} name= 'username' value={data.username}></input>
            <input onChange={handleInputChange} type= 'password' name= 'password' value={data.password}></input>
            <input onChange={handleInputChange} type= 'checkbox' name= 'remember' checked={data.remember}></input>
        </div>
    )
}







/* export class Login extends React.Component {
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
                <button name='loginButton' disabled = {!this.state.username || !this.state.password} onClick={this.onLogin}>Login</button>
            </div>
        )
    }

} */