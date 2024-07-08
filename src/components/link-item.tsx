interface Props {
  href: string;
  children: React.ReactNode;
  variant: "active" | "inactive";
}

const LinkItem = ({ href, children, variant = "inactive" }: Props) => {
  const getVariantClass = () => {
    if (variant === "active") {
      return "bg-teal-500/10 text-teal-500/50";
    }
    if (variant === "inactive") {
      return "bg-transparent";
    }
  };

  return (
    <a
      href={href}
      className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold ${getVariantClass()}`}
    >
      {children}
    </a>
  );
};
export default LinkItem;
