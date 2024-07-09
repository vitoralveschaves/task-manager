import { Task } from "../types/task";
import { Check, ExternalLink, Loader2 } from "lucide-react";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
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
          className={`relative flex size-6 items-center justify-center rounded-md text-white ${getVariantClassLabel()}`}
        >
          {task.status === "completed" && <Check size={16} />}
          {task.status === "started" && (
            <Loader2 size={16} className="animate-spin" />
          )}
          <input type="checkbox" className="sr-only" />
        </label>

        {task.title}
      </div>
      <div>
        <a href="#" className="block text-slate-500 transition hover:scale-110">
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;
