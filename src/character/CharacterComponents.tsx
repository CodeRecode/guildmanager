import { ResourceState } from "./CharacterState";

interface StatProps {
    name: string,
    value: number,
    className?: string
}

export function Stat(props: StatProps) {
    return (<div className={`text-center border-black ${props.className}`}><span className="font-semibold">{props.name}:</span> {props.value}</div>);
}

interface ResourceBarProps {
    state: ResourceState,
    outerClassName?: string,
    innerClassName?: string
}

export function ResourceBar(props: ResourceBarProps) {
    const percent = Math.floor(props.state.current / props.state.max * 100);
    return (
        <div className={`bg-zinc-300 grid ${props.outerClassName}`}>
            <div className="col-start-1 row-start-1 text-center relative">{props.state.current + "/" + props.state.max}</div>
            <div className={`col-start-1 row-start-1 ${props.innerClassName}`} style={{width: `${percent}%`}}></div>
        </div>
    );
}