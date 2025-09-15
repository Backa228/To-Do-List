import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import TaskList from "./components/TaskList.jsx"
import TaskForm from "./components/TaskForm.jsx"

function App() {
  const [tasks, setTasks ] = useState([
    { id: 1, text: "Learn React", priority: "High", completed: false },
    { id: 2, text: "Build a To-Do App", priority: "Medium", completed: false },
    { id: 3, text: "Profit!", priority: "Low", completed: false },
    { id: 4, text: "Learn React", priority: "High", completed: false },
    { id: 5, text: "Build a To-Do App", priority: "Medium", completed: false },
    { id: 6, text: "Profit!", priority: "Low", completed: false },
    { id: 7, text: "Learn React", priority: "High", completed: false },
    { id: 8, text: "Build a To-Do App", priority: "Medium", completed: false },
    { id: 9, text: "Profit!", priority: "Low", completed: false },
    { id: 10, text: "Learn React", priority: "High", completed: false }
  ])
  const addTask = (text, priority = "Medium") => {
    const newTask = {
      id: Date.now(),
      text,
      priority, 
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  return (
    <>
      <Header />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>
    </>
  )
}

export default App
