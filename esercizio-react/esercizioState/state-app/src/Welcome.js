import React from "react";
import { Container } from "./Container";
import { DisplayLanguage } from "./LanguageContext ";

export class Welcome extends React.Component {

state = {
  language: 'en'
}

handleLanguageChange = (event) => {
  this.setState({
    language: event.target.value
  })
}

  render() {
    return (
<div>
      <select value={this.state.language} onChange={this.handleLanguageChange}>
        <option value='en'>ENGLISH</option>
        <option value='it'>ITALIANO</option>
      </select>
      <DisplayLanguage.Provider value={this.state.value}>
        <Container> 
        {(title) => {
          return <h1> Il titolo è '{title}'</h1>
        }}
      </Container>
      </DisplayLanguage.Provider>
      

    </div>
  )  
  }
}