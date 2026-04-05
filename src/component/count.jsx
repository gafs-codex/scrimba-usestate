// give a certain property in the App or main .jsx and then attach
// with the prop here
function Count(props) {
    return (
        <h2 className="count">{props.number}</h2>
    )
}
export default Count;