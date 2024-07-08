import LinkItem from "./link-item";
import { Home, ListChecks } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-full w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-teal-500">Task Manager</h1>
        <p className="text-xs">
          Um simples{" "}
          <span className="font-semibold text-teal-500">
            organizador de tarefas
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <LinkItem href="#" variant="inactive">
          <Home size={24} />
          Início
        </LinkItem>

        <LinkItem href="#" variant="active">
          <ListChecks size={24} />
          Minhas tarefas
        </LinkItem>
      </div>
    </aside>
  );
};

export default Sidebar;
