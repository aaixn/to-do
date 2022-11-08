import './App.css';
import ToDoList from './components/ToDoList/toDoList';
import ToDoForm from './components/ToDoForm/toDoForm';
import { useState } from 'react'
import ToDoItem from './components/ToDoItem/toDoItem';

function App() {
  

  const [todo, setToDo] = useState([])


  return (
    <div className="App">
      <ToDoForm todo = {todo} setToDo = {setToDo}/>
      <ToDoList todo = {todo} setToDo = {setToDo}/>
    </div>
  );
}

export default App;
