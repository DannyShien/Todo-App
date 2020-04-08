import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
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
        <h1>Simple Todo App</h1>
        <form onSubmit={ this.handleSubmit } >
          <input
            text='text'
            name='input'
            placeholder='Let`s add a task..'
            value={this.state.input}
            onChange={ this.handleInput }
          />
          <button
            type='submit'
          >Add</button>
        </form>
        <div>
          {this.state.todoList.map( todo => (
            <div>{todo}</div>
          ))}
        </div>

      </div>
    )
  } 

  handleInput = (event) => {

    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Adding task`)
    const { input } = this.state
    console.log(`TASK ADDED:`,input)
    this.setState({
      todoList:  [input, ...this.state.todoList]
    })
    this.setState({
      input: ''
    })
  }
  
  // renderTask = () => {
  //   const { todoList } = this.state.todoList
  //   console.log(todoList)
  //   return (
  //     <ul>
  //       <li></li>
  //     </ul>
  //   )
  // }

}

export default Todo;
