import clsx from "clsx";
import TaskItem from "./TaskItem";
import { useTranslation } from 'react-i18next';

function TaskList({ tasks, onDelete, onToggle }) {
  const { t } = useTranslation()
  return (
    <ul className={clsx("task-list", tasks.length >= 10 ? "many-tasks" : "few-tasks")}>

        {/* аналог if */}
      {tasks.length === 0 && <p className="notify">{t("manyTask")}</p>}

        {tasks.map((task) => ( 
            <TaskItem 
            key={task.id} //1
            task={task} 
            onDelete={() => onDelete(task.id)}
            onToggle={() => onToggle(task.id)}

            />
        ))}  

      {tasks.length >= 10 && <p className="notify">{t("fewTask")}</p>}
    </ul>
  );
}

export default TaskList;