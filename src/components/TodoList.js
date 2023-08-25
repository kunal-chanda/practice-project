import '../App.css';
import React from 'react'

const TodoList = (props) => {
  return (
    <div className='userDiv'>
      <ul className='todoDetail'>
        <li><b>ID:</b> {props.todoData.id}</li>
        <li><b>Title:</b> {props.todoData.title}</li>
        <li><b>Status:</b> {props.todoData.completed.toString()}</li>
      </ul>
    </div>
  )
}

export default TodoList
