import React from 'react'

export class ClickTracker extends React.Component{

    state = {
        btnPressed : 'No button pressed'
    }
     

    buttonTracker = (event) => {
        this.setState(() => {
            return {
              btnPressed: event.target.name,
            };
          });
    }



    render() {
        return (
            <div>
                <button name="Button 1" onClick={this.buttonTracker}>Button 1</button>
                <button name="Button 2" onClick={this.buttonTracker}>Button 2</button>
                <button name="Button 3" onClick={this.buttonTracker}>Button 3</button>
                <h1>The last button pressed is: {this.state.btnPressed}</h1>
            </div>
        )
    }



}