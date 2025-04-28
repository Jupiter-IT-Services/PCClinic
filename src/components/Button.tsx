const buttonVariants = {
    "default": "",
    "secondary": "bg-blue-500 shadow-md flex gap-3 p-[12px] rounded-md text-white items-center justify-center hover:gap-6 smooth_transition "
}

export type ButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    icon: React.ReactNode;
    variant: keyof typeof buttonVariants
}
export default function Button(props: ButtonProps) {
    return (
        <a href={props.href} className={`${buttonVariants[props.variant || "secondary"]} font-bold ${props.className}`}>{props.children} {props.icon}</a>
    )
} 