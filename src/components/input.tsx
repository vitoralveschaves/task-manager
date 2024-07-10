interface Props extends React.ComponentProps<"input"> {
  label: string;
}

const Input = ({ id, name, label, placeholder, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        className="rounded-lg border px-4 py-3 text-sm outline-none"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
