import { ProgressBar } from "../components/ProgressBar";
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
    return ProgressBar({...props, ...props.state, text: props.state.current + "/" + props.state.max});
}