import React from 'react';

const List = ({ todo, toggleComplete, onDelete  }) => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div 
        onClick={ toggleComplete }
        style={{
          textDecoration: todo.isComplete ? 'line-through' : ''
        }}
      >
        { todo.input }
      </div>
      <button onClick={ onDelete } >x</button>
    </div>
  )
}

export default List;