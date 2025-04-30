export type BoxProps = {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  className?: string;
};
export default function Box(props: BoxProps) {
  return (
    <div
      className={`border flex flex-col gap-3 bg-white border-blue-500/30 px-[2rem] py-[4rem] hover:shadow-md shadow-sm rounded-lg ${props.className} smooth_transition`}
    >
      <div className="flex gap-3">
        <div className="bg-blue-600/30 p-2 text-blue-600 rounded-full">
          {props.icon}
        </div>
        <h1 className="font-bold text-2xl">{props.title}</h1>
      </div>
      <p>{props.children}</p>
    </div>
  );
}
