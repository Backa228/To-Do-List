import clsx from "clsx"

function TaskList( { task, priority = "Medium"} ) {
    return (
<li className={clsx(
        priority === "High" && "high-priority",
        priority === "Medium" && "medium-priority",
        priority === "Low" && "low-priority"
      )}>
            {task} - <strong>{priority}</strong>
            <button>Delete</button>
        </li>
    )
} 
export default TaskList