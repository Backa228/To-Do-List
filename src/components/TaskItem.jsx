import clsx from "clsx";
import {MdDelete} from "react-icons/md"

function TaskItem({ task, onDelete, onToggle }) {
  const deadlineDate = task.deadline ? new Date(task.deadline) : null
  const formattedDeadline = deadlineDate ? deadlineDate.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit", // or "long" for full month name
    year: "2-digit", // or "numeric" for full year
    hour: "2-digit",
    minute: "2-digit"
  }) : null;

  const now = new Date()
  const isOverdue = deadlineDate && !task.complated && deadlineDate < now;

  return (
      <li className="task-item">
          <input type="checkbox" checked={task.completed} onChange={onToggle}/>
          <p className={clsx(
            task.completed && "completed",
            task.priority === "High" && "high-priority",
            task.priority === "Medium" && "medium-priority",
            task.priority === "Low" && "low-priority"
          )}>
        {task.text}
      </p>
      {formattedDeadline && <div className={clsx(
        "deadline",
        isOverdue && "overdue"
      )}>{formattedDeadline}</div>}

        <button className="deleteBtn" onClick={onDelete}><MdDelete className="deleteIcon"/></button>
    </li>
  );
}

export default TaskItem;