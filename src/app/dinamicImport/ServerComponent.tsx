
export default function ServerComponent(props: { name: string }) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}