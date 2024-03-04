function Bag(props) {
    const bag = {
        padding: "20px", 
        border: "1px solid gray", 
        background: "#fff", 
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            <p>Here comes the start of the bag. </p>
            {props.children}
            <p>Here comes the end of the bag. </p>
        </div>
    )
}

export default Bag;