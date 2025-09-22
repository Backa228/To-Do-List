// СОРТИРОВКА
  // const names = ["Anna", "ben", "Charlie", "andriy", "David", "Bob"];

  // const sorted = [...names].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  // console.log(sorted)

  // console.log("Звичайне sort():", [...names].sort());

  // console.log("З localeCompare:", [...names].sort((a, b) =>
  // a.localeCompare(b, 'en', { sensitivity: 'base' })
  // ));
  
  // const nums = [100, -3, 25, 0, -45, 8, 23, -1];//за спаданням від більшого до меншого
  // nums.sort((a, b) => b - a); // -> [10,5,3,1]
  // console.log(nums)

  // const num = [5, 1, 10, 3];

  // num.sort((a, b) => {
  //   console.log(`Порівнюємо ${a} і ${b}`);
  //   const result = a - b;
  //   console.log(`Результат: ${result} (${result < 0 ? a + " перед " + b : result > 0 ? b + " перед " + a : "рівні"})`);
  //   return result;
  // });
  
  // const users = [
  //   { id: 1, name: "Anna", age: 25 },
  //   { id: 2, name: "Ben", age: 17 },
  //   { id: 3, name: "Charlie", age: 40 },
  //   { id: 4, name: "Andriy", age: 16 },
  //   { id: 5, name: "David", age: 30 }] //за зростанням від меншого до більшого (спочатку молодщі потим старші)
    
  //   const sorted1 = [...users].sort((a, b) => a.age - b.age);
  //   console.log(sorted1)

  //   const sorted2 = [...users].sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
  //   console.log(sorted2)


import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import TaskList from "./components/TaskList.jsx"
import TaskForm from "./components/TaskForm.jsx"

function App() {
  const [tasks, setTasks] = useState([
    // { id: 1, text: "Learn React", priority: "High", completed: false },
    // { id: 2, text: "Build a To-Do App", priority: "Medium", completed: false },
    // { id: 3, text: "Profit!", priority: "Low", completed: false },
    // { id: 4, text: "Learn React", priority: "High", completed: false },
    // { id: 5, text: "Build a To-Do App", priority: "Medium", completed: false },
    // { id: 6, text: "Profit!", priority: "Low", completed: false },
    // { id: 7, text: "Learn React", priority: "High", completed: false },
    // { id: 8, text: "Build a To-Do App", priority: "Medium", completed: false },
    // { id: 9, text: "Profit!", priority: "Low", completed: false },
    // { id: 10, text: "Learn React", priority: "High", completed: false }
  ])

  const addTask = (text, priority = "Medium", deadline = null) => {
    const newTask = {
      id: Date.now(),
      text,
      priority, 
      completed: false,
      deadline
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
  
  const order = {
    High: 1, 
    Medium: 2, 
    Low: 3
  }

  const sortedTask = [...tasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }

    if (a.deadline && b.deadline) {
      return new Date(a.deadline) - new Date(b.deadline)
    } else if (a.deadline && !b.deadline) {
      return -1;
    } else if (!a.deadline && b.deadline) {
      return 1;
    }

    return order[a.priority] - order[b.priority]
  })

  return (
    <>
      <Header />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={sortedTask} onDelete={deleteTask} onToggle={toggleTask}/>
    </>
  )
}

export default App
