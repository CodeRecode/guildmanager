type CardProps = {
    children: React.ReactNode
}

export function Card(props: CardProps) {
    return (<div className="bg-zinc-600 border border-zinc-300 p-5 rounded-md">
        {props.children}
    </div>);
}