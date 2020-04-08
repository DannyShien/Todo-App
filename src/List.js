import React from 'react';

const List = ({ task, isComplete }) => {
  console.log()
  return (
    <div 
      onClick={isComplete}
      style={{
        textDecoration: task.isComplete ? 'line-through' : ''
      }}
    >
      {task.input}
    </div>
  )
}

export default List;