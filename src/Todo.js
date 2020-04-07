import React, { Component } from 'react';
import './Todo.css';

// Add task to list
// Display tasks
// Delete tasks 

class Todo extends React {
  constructor(props) {
    super(props); 
    this.state = {
      input: '',
      todoList: []
    }
  }

  render() {
    return (
      <div className="Todo">
        <header className="Todo-header">
          <h1>Simple Todo App</h1>
        </header>
      </div>
    )
  }
}

export default Todo;
