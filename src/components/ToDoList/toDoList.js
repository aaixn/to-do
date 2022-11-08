import React from 'react'
import '../ToDoList/toDoList.css'
import ToDoItem from '../ToDoItem/toDoItem'

const ToDoList = ({todo, setToDo}) => {
    return (
        <div className="todo-list">
            {todo.map((item, index) => {
                return <ToDoItem todo = {todo} item={item} setToDo = {setToDo} index = {index} key = {index}/>
            })}
        </div>
    )
}

export default ToDoList