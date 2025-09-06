// import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import TaskList from "./components/TaskList.jsx"

function App() {
  const tasks = [
    { id: 1, text: "Learn React", priority:"High"},
    { id: 2, text: "Build a To-Do App", priority:"Medium"},
    { id: 3, text: "Profit!", priority:"Low" },
    { id: 4, text: "Learn React", priority:"High"},
    { id: 5, text: "Build a To-Do App", priority:"Medium"},
    { id: 6, text: "Profit!", priority:"Low" },
    { id: 7, text: "Learn React", priority:"High"},
    { id: 8, text: "Build a To-Do App", priority:"Medium"},
    { id: 9, text: "Profit!", priority:"Low" },
    { id: 10, text: "Learn React", priority:"High" }

  ]

  return (
    <>
      <Header/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
