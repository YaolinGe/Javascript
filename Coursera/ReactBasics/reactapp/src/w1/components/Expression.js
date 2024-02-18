function Expression(props) {
    return (
        <div>
        <h1>toggleBoolean prop is {props.toggleBoolean.toString()}</h1>
        <h1>math prop is: <em>{props.math}</em></h1>
        <h1>str prop is: <em>{props.str}</em></h1>    
        </div>
    )
}

export default Expression;