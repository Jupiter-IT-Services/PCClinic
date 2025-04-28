export type DashProps = {
    text: string;
    className?: string;
    about?: string;
}

export default function Dash(props: DashProps) {
    return (
        <div className={`flex flex-col items-center justify-center gap-3 w-full ${props.className}`}>
            <div className={`flex items-center w-full justify-center gap-3`}>
                <div className="bg-gradient-to-r from-transparent to-blue-500 w-[40%] h-[1px]" />
                <p className="font-bold text-2xl">{props.text}</p>
                <div className="bg-gradient-to-l from-transparent to-blue-500 w-[40%] h-[1px]" />
            </div>
            <div>
                <p className="opacity-70">{props.about}</p>
            </div>
        </div>
    )
}