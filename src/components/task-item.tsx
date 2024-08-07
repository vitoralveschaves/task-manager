import { Task } from "../types/task";
import { Check, ExternalLink, Loader2, Trash2 } from "lucide-react";

interface Props {
  task: Task;
  onDeleteClick: (taskId: number) => void;
  onChangeStatus: (taskId: number) => void;
}

const TaskItem = ({ task, onDeleteClick, onChangeStatus }: Props) => {
  const getVariantClass = () => {
    if (task.status === "completed") {
      return "bg-teal-500/10";
    }
    if (task.status === "started") {
      return "bg-amber-400/10";
    }

    return "bg-slate-500/10";
  };

  const getVariantClassLabel = () => {
    if (task.status === "completed") {
      return "bg-teal-500";
    }
    if (task.status === "started") {
      return "bg-amber-400";
    }

    return "bg-slate-300";
  };
  return (
    <div
      className={`flex items-center justify-between rounded-xl bg-teal-500/10 p-3 pr-4 text-sm ${getVariantClass()}`}
    >
      <div className="flex items-center gap-3">
        <label
          className={`relative flex size-6 cursor-pointer items-center justify-center rounded-md text-white ${getVariantClassLabel()}`}
        >
          {task.status === "completed" && <Check size={16} />}
          {task.status === "started" && (
            <Loader2 size={16} className="animate-spin" />
          )}
          <input
            type="checkbox"
            className="sr-only"
            checked={task.status === "completed"}
            onChange={() => onChangeStatus(task.id)}
          />
        </label>

        {task.title}
      </div>
      <div className="flex gap-2 text-slate-500">
        <button
          className="px-2 py-1 transition hover:scale-110 hover:text-red-500"
          onClick={() => onDeleteClick(task.id)}
        >
          <Trash2 size={16} />
        </button>
        <a
          href="#"
          className="px-2 py-1 text-slate-500 transition hover:scale-110"
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;
