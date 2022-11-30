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

  render() {
    const items = this.state.names.map((name, index) => (
      <li key={index}>{name}</li>
    ));

    return (
      <div>
        <ul>{items}</ul>
        <input name="todoValue" value={this.state.todoValue} onChange={this.handleInputChange} ></input>
        <button onClick={this.handleButtonClick}>Add name</button>
      </div>
    );
  }
}
