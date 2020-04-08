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
            <List 
              key={ task.id } 
              task={ task } 
              isComplete={() => this.isComplete(task.id)}  
            />
          ))}
        </div>

      </div>
    )
  } 

  addTodo = (task) => {
    this.setState({
      todos: [task, ...this.state.todos]
    })
  }

  isComplete = (id) => {
    this.setState({
      todos: this.state.todos.map( task => {
        console.log(task)
       if (task.id === id ) {
          return {
            ...task,
            isComplete: !task.isComplete
          }
       } else {
         return task
       }  
      })
    })
  }
  

}

export default TodoApp;
