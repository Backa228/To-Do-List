import clsx from 'clsx'
import TaskItem from './TaskItem'
 
{/* аналог if */}
function TaskList( { tasks, onDelete, onToggle } ) {
    return (
        <ul className={clsx("task-list", tasks.lenght >= 10 ? "many-tasks" : "few-tasks")}>
            {tasks.priority === "High" ? "! " : ""}
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task.priority === "High" ? `!!! ${task.text}` : task.text} //аналог if-else
                    priority={task.priority}
                    onDelete={() => onDelete} 
                    onToggle={() => onToggle}/>
            ))}

            {tasks.length >= 10 && <p>You have a lot of tasks</p>} 
            
        </ul>
    )
} 

export default TaskList