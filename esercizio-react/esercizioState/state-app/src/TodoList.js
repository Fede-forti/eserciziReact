import React from "react";

export class TodoList extends React.Component {
    state = {
     todoValue : '',
     names : ['Federica', 'Emanuele', 'Cinzia', 'Gianfranco']
    }

    handleInputChange = (event) => {
        this.setState({
            todoValue : event.target.value,
        })        
    }

  handleButtonClick = () => {
    let {names, todoValue} = this.state;
    names.push(todoValue)
    this.setState({ todoValue });
    this.resetValue()


  };

  resetValue = () => {
    this.setState({
        todoValue : ''
    })
  }

  handleResetArray = () => {
    this.setState({
        names : []
    })
  }

  handleRemoveItem = (event) => {
    console.log(event.target.value)

    this.setState({
        names : this.state.names.filter(item => {
            return item !== event.target.value})
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.render({ ...this.state, handleRemoveItem: this.handleRemoveItem })}</h1>
      </div>
    );
  }
}
