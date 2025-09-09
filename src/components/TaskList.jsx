import clsx from 'clsx'
import TaskItem from './TaskItem'
 
{/* аналог if */}
function TaskList( { tasks } ) {
    return (
        <ul className={clsx("task-list", tasks.lenght >= 10 ? "many-tasks" : "few-tasks")}>
            {tasks.priority === "High" ? "! " : ""}
            {tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task.priority === "High" ? `!!! ${task.text}` : task.text} //аналог if-else
                priority={task.priority}/>
            ))}

            {tasks.length >= 10 && <p>You have a lot of tasks</p>} 
            
        </ul>
    )
} 

export default TaskList