function GuessRandomNumber() {
    function handleClick() {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        let guess = prompt("Guess a number between 1 and 10");
        if (guess == randomNum) {
            alert("You guessed it!");
        } else {
            alert("Sorry. The number was " + randomNum);
        }
    
    }

    return (
        <div>
            <button onClick={handleClick}>Guess a number between 1 and 10</button>
        </div>
    )
}

export default GuessRandomNumber;
