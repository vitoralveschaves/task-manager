import { createPortal } from "react-dom";
import Input from "./input";
import Button from "./button";
import { Task } from "../types/task";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  onCloseClick: () => void;
  onAddTaskClick: (newTask: Task) => void;
}

const AddTaskDialog = ({ isOpen, onCloseClick, onAddTaskClick }: Props) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = data.get("title")?.toString();
    const period = data.get("period") as Task["period"];
    const description = data.get("description")?.toString();

    if (!title || !period || !description) return null;

    const newTask: Task = {
      id: Math.floor(Math.random() * 100),
      title,
      status: "not_started",
      description,
      period,
    };

    onAddTaskClick(newTask);
    onCloseClick();
    toast("Tarefa adicionada com sucesso.");
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur">
      <div className="w-96 space-y-4 rounded-xl bg-white p-5 shadow">
        <div className="space-y-1 text-center">
          <h2 className="text-center text-xl font-semibold">Nova tarefa</h2>
          <p className="text-sm text-slate-400">Insira as informações abaixo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Título"
            name="title"
            id="title"
            placeholder="Título da tarefa"
          />
          <Input
            label="Horário"
            name="period"
            id="period"
            placeholder="Selecione"
          />
          <Input
            label="Descrição"
            name="description"
            id="description"
            placeholder="Descrição da tarefa"
          />
          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="flex-1 justify-center"
              onClick={onCloseClick}
            >
              Cancelar
            </Button>
            <Button type="submit" size="lg" className="flex-1 justify-center">
              Adicionar
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default AddTaskDialog;
