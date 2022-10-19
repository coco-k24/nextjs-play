const Hello = () => {
    const onclick = () => {
        alert('Hello');
    }
    const text = 'Hello, React';

    return (
        <div onClick={onclick}>
            { text }
        </div>
    )
}

export default Hello;