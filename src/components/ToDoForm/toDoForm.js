import React, { useState } from 'react'
import '../ToDoForm/toDoForm.css'
import ToDoList from '../ToDoList/toDoList'

const ToDoForm = ({todo, setToDo}) => {

    const [formState, setFormState] = useState('')

    const handleChange = (e) => {
        setFormState(e.target.value)                    // sets formState to the value of the input
    }

    const handleClick = () => {
        if (formState !== '') {
            setToDo([...todo, {title: formState, complete: false}])     // ... pulls values out of the array | setToDo to what the value of todo was and adds formState
            setFormState('')
        }
    }

    return(
        <div className='todo-form'>
            <div className='add-todo'>
                <h1>To Do:</h1>
                <input type='text' onChange={handleChange} value={formState}></input>
                <button onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

export default ToDoForm