type CardProps = {
    children: React.ReactNode
}

export function Card(props: CardProps) {
    return (<div className="bg-zinc-400 border-2 border-zinc-900 p-5 rounded-md">
        {props.children}
    </div>);
}