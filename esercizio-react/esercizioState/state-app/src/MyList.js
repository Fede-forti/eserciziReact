import React from "react";
import { TodoList } from "./TodoList";

export class MyList extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={({names, handleRemoveItem}) => {
            return (
              <div>
                <ul>
                  {names.map((name, index) => (
                    <li key={index}>{name}
                    <button value={name} onClick={handleRemoveItem}>Remove items</button>
                    </li>
                  ))}
                  
                </ul>

              </div>
            );
          }}
        ></TodoList>
      </div>
    );
  }
}
