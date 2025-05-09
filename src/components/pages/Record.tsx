export const records = [
    {
        name: "Repairs Completed",
        stat: "500+"
    },
    {
        name: "Customer Satisfaction",
        stat: "98%"
    },
    {
        name: "Average Turnround",
        stat: "3 Day"
    },
    {
        name: "Trained Student Technicians",
        stat: "50+"
    },
]

export default function Record() {
    return (
        <div className="bg-blue-600 text-white flex flex-col gap-2 py-[6rem] w-full mt-[6rem] items-center justify-center">
            <h1 className="font-black text-4xl">Our Record</h1>
            <p className="opacity-70">We're proud of the service we provide to our community</p>

            <div className="mt-[5rem] md:flex-nowrap flex-wrap flex gap-[3rem] md:gap-[8rem] w-full items-center justify-center">
                {records.map((r, i) => <RecordItem key={i} {...r}/>)}
            </div>
        </div>
    )
}


type RecordItemProps = {
    stat: string;
    name: string;
}
function RecordItem(props: RecordItemProps) {
    return <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="font-black text-4xl">{props.stat}</h1>
        <p className="opacity-70">{props.name}</p>
    </div>
}