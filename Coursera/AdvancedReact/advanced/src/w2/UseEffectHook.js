import React from 'react'; 

export function UseEffectHook() {
    const [toggle, setToggle] = React.useState(false); 

    const clickHandler = () => {
        setToggle(!toggle); 
    }

    React.useEffect(() => {
        document.title = toggle ? "Welcome to little lemon" : "using some effect"; 
    }, [toggle])

    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={clickHandler}>Toggle</button>
            {toggle && <h2>Toggle is on</h2>}
        </div>
    )
}