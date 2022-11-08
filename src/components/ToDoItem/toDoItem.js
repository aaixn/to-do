import React from "react";
import '../ToDoItem/toDoItem.css'

const ToDoItem = ({todo, setToDo, index, item}) => {

    const completeStatus = () => {
        const copyToDo = [...todo]
        copyToDo[index].complete = !copyToDo[index].complete
        setToDo(copyToDo)
    }

    return (
        <div className='todo-item' onClick={() => completeStatus()}>
            {item.complete ? <h2 style={{textDecoration: 'line-through'}}>{item.title}</h2> : <h2>{item.title}</h2>}
            {item.complete ? <h2>Mark as Complete</h2> : <h2>Mark as Incomplete</h2>}
        </div>
    )
}

export default ToDoItem