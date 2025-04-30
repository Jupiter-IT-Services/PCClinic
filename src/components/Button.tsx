const buttonVariants = {
  default:
    "bg-white shadow-md flex gap-3 p-[12px] rounded-md text-blue-600 hover:bg-gray-100 items-center cursor-pointer justify-center hover:gap-6 smooth_transition",
  secondary:
    "bg-blue-600 shadow-md flex gap-3 p-[12px] rounded-md text-white items-center hover:bg-blue-600 cursor-pointer justify-center hover:gap-6 smooth_transition ",
  ghost:
    "bg-blue-300 shadow-md flex gap-3 px-[12px] py-[8px] rounded-md text-blue-600 items-center hover:bg-blue-400 cursor-pointer justify-center hover:gap-6 smooth_transition ",
};

export type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  variant: keyof typeof buttonVariants;
};
export default function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      className={`${buttonVariants[props.variant || "secondary"]} font-bold ${
        props.className
      }`}
    >
      {props.children} {props.icon}
    </a>
  );
}
