import React, { Component } from 'react'; 

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: ''
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } >
        <input
          text='text'
          name='input'
          placeholder='Let`s add a task..'
          value={ this.state.input }
          onChange={ this.handleInput }
        />
        <button
          type='submit'
        >Add</button>
      </form>
    )
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit({
      input: this.state.input,
      isComplete: false,
      id: Math.random()
    })
    this.setState({
      input: ''
    })
  }

}

export default Form;