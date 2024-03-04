// function Btn() {
//     const clickHandler = () => console.log("Clicked!")

//     return (
//         <button onClick={clickHandler}>
//             Click me!
//         </button>
//     )
// }

// export default Btn;

function thirdExample() {
    console.log("Third example")
}

const fourthExample = () => console.log("Fourth example")

function Btn() {
    const clickHandler = () => console.log("mouse over!")

    return (
        <div>
            <button onClick={function () { console.log("first example") }}>
                An inline anonymous ES5 function event handler
            </button>

            <button onClick={() => console.log("Second example")}>
                An inline anonymous ES6 function event handler.
            </button>
            
            <button onClick={thirdExample}>
                using a separate function declaration. 
            </button>

            <button onClick={fourthExample}>
                using a separate function expression.
            </button>
        </div>

        // <button onMouseOver={clickHandler}>
        //     Click me!
        // </button>
    )
}

export default Btn;