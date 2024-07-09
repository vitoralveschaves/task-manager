import { Trash2, Plus, Sun, CloudSun, Moon, Key } from "lucide-react";
import Button from "./button";
import TaskSeparator from "./task-separator";
import { useState } from "react";
import { TASKS } from "../constants/tasks";
import TaskItem from "./task-item";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((t) => t.period === "morning");
  const afterTasks = tasks.filter((t) => t.period === "afternoon");
  const nightTasks = tasks.filter((t) => t.period === "night");

  const handleDeleteTask = (taskId: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  return (
    <main className="flex flex-1 flex-col px-[34px] py-[70px]">
      <div className="flex items-end justify-between">
        <div className="space-y-[6px]">
          {" "}
          <span className="text-sm font-semibold text-teal-500">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <Trash2 size={16} />
          </Button>

          <Button>
            Nova tarefa
            <Plus size={16} />
          </Button>
        </div>
      </div>
      <section className="mt-6 flex-1 space-y-6 rounded-xl bg-white p-6">
        {morningTasks.length > 0 && (
          <div>
            <TaskSeparator icon={<Sun />} title={"Manhã"} />
            <div className="space-y-3">
              {morningTasks.map((task) => (
                <TaskItem
                  onDeleteClick={handleDeleteTask}
                  key={task.id}
                  task={task}
                />
              ))}
            </div>
          </div>
        )}
        {afterTasks.length > 0 && (
          <div>
            <TaskSeparator icon={<CloudSun />} title={"Tarde"} />
            <div className="space-y-3">
              {afterTasks.map((task) => (
                <TaskItem
                  onDeleteClick={handleDeleteTask}
                  key={task.id}
                  task={task}
                />
              ))}
            </div>
          </div>
        )}
        {nightTasks.length > 0 && (
          <div>
            <TaskSeparator icon={<Moon />} title={"Noite"} />
            <div className="space-y-3">
              {nightTasks.map((task) => (
                <TaskItem
                  onDeleteClick={handleDeleteTask}
                  key={task.id}
                  task={task}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Tasks;
