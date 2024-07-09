interface Props {
  icon: React.ReactNode;
  title: string;
}

const TaskSeparator = ({ icon, title }: Props) => {
  return (
    <div className="mb-3 flex gap-2 border-b-2 border-slate-100 pb-[5px] font-semibold text-slate-500">
      {icon} {title}
    </div>
  );
};

export default TaskSeparator;
