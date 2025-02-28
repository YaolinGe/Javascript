const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/img.jpg") {
        myImage.setAttribute("src", "images/img2.jpg");
    } else {
        myImage.setAttribute("src", "images/img.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName)
    {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is cool, " + myName;
    }
}

if (!localStorage.getItem("name"))
{
    setUserName(); 
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = () => {
    setUserName();
}


// const myHeading = document.querySelector("h1"); 
// myHeading.textContent = "Hello world!";

// const button = document.querySelector("button");
// button.addEventListener("click", updateName); 

// function updateName() {
//     const name = prompt("Enter a new name"); 
//     button.textContent = "Player 1: " + name; 
// }