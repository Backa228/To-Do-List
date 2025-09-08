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
                    task={task.text}
                    priority={task.priority === "High" ? `!!! ${task.text}` : task.text} />
            ))}

            {tasks.length >= 10 && <p>You have a lot of tasks</p>} 
            
        </ul>
    )
} 

export default TaskList