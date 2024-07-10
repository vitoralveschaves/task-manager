import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "ghost" | "secondary";
  size?: "sm" | "lg";
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "sm",
  ...rest
}: Props) => {
  const getVariantSizeClasses = () => {
    if (size === "sm") {
      return "py-1 text-xs";
    }
    if (size === "lg") {
      return "py-2 text-sm";
    }
  };

  const getVariantClass = () => {
    if (variant === "primary") {
      return "bg-teal-500 text-white hover:bg-teal-500/50";
    }
    if (variant === "ghost") {
      return "bg-transparent text-slate-500 hover:bg-slate-200/50";
    }
    if (variant === "secondary") {
      return "bg-slate-500 hover:bg-slate-500/50 text-white";
    }
  };
  return (
    <button
      className={`flex items-center gap-1 rounded-md px-3 font-semibold ${getVariantClass()} ${getVariantSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
