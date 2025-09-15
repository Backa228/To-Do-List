import clsx from "clsx"

function TaskItem( { task, priority = "Medium", onDelete, onToggle, completed} ) {
    return (
        <li className={clsx(
        "task-item",
        priority === "High" && "high-priority",
        priority === "Medium" && "medium-priority",
        priority === "Low" && "low-priority",
        completed && "completed"
        )}>
            <input type="checkbox" checked={completed} onChange={onToggle(task.id)}/>
            {task} 
            <button onClick={onDelete(task.id)}>Delete</button>
        </li>
    )
} 
export default TaskItem