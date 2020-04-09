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
          {this.state.todos.map( todo => (
            <List 
              key={ todo.id } 
              todo={ todo } 
              toggleComplete={ () => this.toggleComplete(todo.id) }  
              onDelete={ () => this.handleDelete(todo.id) }
            />
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

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map( todo => {
       if (todo.id === id ) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
       } else {
         return todo
       }  
      })
    })
  }
  
  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter( todo => todo.id !== id)
    })
  }

}

export default TodoApp;
