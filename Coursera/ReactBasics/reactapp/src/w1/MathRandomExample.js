function MathRandomExample() {
    const getRandomNumber = () => Math.floor(Math.random() * 10) + 1; 
    return (
        <h1>Here is a random number from 0 to 10: {getRandomNumber()}</h1>
        // <h1>{Math.random() >= .5 ? "Over 0.5" : "Under 0.5"}</h1>
    )
}

export default MathRandomExample;