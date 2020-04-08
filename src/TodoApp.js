import React, { Component } from 'react';
import './TodoApp.css';
import Form from './Form'
import List from './List'

class TodoApp extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div className="Todo">
        <h1>Simple Todo App</h1>
        <Form 
          onSubmit={ this.addTodo }
        /> 
        <div>
          {this.state.todos.map( task => (
            <List key={ task.id } task={ task.input } />
          ))}
        </div>

      </div>
    )
  } 

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }
  

}

export default TodoApp;
