function Header(props) {
    console.log(props);
    return (
        <header>
            <h1>Hello, from header, {props.name}, {props.color} </h1>
        </header>
    )
}

export default Header; 