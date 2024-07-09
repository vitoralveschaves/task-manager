import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "ghost";
}

const Button = ({ children, variant = "primary", ...rest }: Props) => {
  const getVariantClass = () => {
    if (variant === "primary") {
      return "bg-teal-500 text-white hover:bg-teal-500/50";
    }
    if (variant === "ghost") {
      return "bg-transparent text-slate-500 hover:bg-slate-200/50";
    }
  };
  return (
    <button
      className={`flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold ${getVariantClass()}`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
