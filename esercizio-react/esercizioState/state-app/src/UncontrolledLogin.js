import React from 'react'

export class UncontrolledLogin extends React.Component{

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username= event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render(){
        return (
            <div>
                <p>The Uncontrolled Form</p>

                <form onSubmit={this.handleFormSubmit}>
                    <input name='username' defaultValue='Federica'/>
                    <input name='password' type='password'/>
                    <input name='remember' type='checkbox'/>

                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }

}