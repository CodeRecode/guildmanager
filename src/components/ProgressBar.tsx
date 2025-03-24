interface ProgressBarProps {
    rounded?: boolean,
    current: number,
    max: number
    text?: string,
    outerClassName?: string,
    innerClassName?: string
}

export function ProgressBar(props: ProgressBarProps) {
    const percent = (props.current / props.max * 100);
    return (
        <div className={`bg-zinc-300 grid ${props.rounded ? "rounded-md" : ""} ${props.outerClassName}`}>
            <div className="col-start-1 row-start-1 text-center relative">{props.text}</div>
            <div className={`col-start-1 row-start-1 ${props.rounded ? "rounded-md" : ""} ${props.innerClassName}`} style={{width: `${percent}%`}}></div>
        </div>
    );
}