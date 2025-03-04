type StatProps = {
    name: string,
    value: number,
    className?: string
}

export function Stat(props: StatProps) {
    let className = "font-semibold text-center " + (props.className ?? "");
    return(<div className={className}>{props.name}: {props.value}</div>);
}