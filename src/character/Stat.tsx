type StatProps = {
    name: string,
    value: number,
    className?: string
}

export function Stat(props: StatProps) {
    return(<div className={`text-center border-black ${props.className}`}><span className="font-semibold">{props.name}:</span> {props.value}</div>);
}