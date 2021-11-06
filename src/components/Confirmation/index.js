export function Confirmation({ children, onConfirmation, onCancellation }) {
    return (
        <div role="dialog">
            <h1>Confirmation</h1>
            <div>{children}</div>
            <button onClick={onConfirmation}>OK</button>
            <button onClick={onCancellation}>Cancel</button>
        </div>
    );
}
