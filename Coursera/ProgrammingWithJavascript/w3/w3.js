console.log(new Date())
console.log(Math.pow(2, 5))

let {PI} = Math 
console.log(PI)

const car = {
    speed: 20, 
    color: "red"
}
console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))

var clothingItem = {
    price: 50, 
    color: 'beige', 
    material: 'cotton', 
    season: 'autumn', 
}

for (const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

function testBracketsDynamicAccess() {
    var dynamicKey; 
    if (Math.random() > 0.5) {
        dynamicKey = "color"; 
    } else {
        dynamicKey = "speed"; 
    }

    var drone = {
        speed: 15, 
        color: "blue"
    }
    console.log(drone[dynamicKey])
}

testBracketsDynamicAccess()

var Car = {
    speed: "fast", 
    engine: "good", 
    model: "toyota"
}

sportsCar = Object.create(Car)
sportsCar.speed = "slow"
console.log("Sportscar: ", sportsCar)

for (var item in sportsCar) {
    console.log(item, ":", sportsCar[item])
}

for (var item of Object.keys(sportsCar)) {
    console.log(item, " has ", sportsCar[item])
}

var fruits = ["apple", "banana", "orange", "mango"]
function appendIndex(fruit, index) {
    console.log(`${fruit} is at index ${index}`)
}
fruits.forEach(appendIndex)

var numbers = [1, 2, 3, 4, 5]
function filterEven(number) {
    return number % 2 == 0
}
console.log(numbers.filter(filterEven))

var numbers = [1, 2, 3, 4, 5]
function mapSquare(number) {
    return number * number
}

console.log(numbers.map(mapSquare))

function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79); 
console.log(shoppingCart); 

function consoleLog(...variable) {
    for (var item of variable) {
        console.log(item)
    }
}

consoleLog(1, 2, 3, 4, 5, 10, 20, 30, 40, 50)

const fruit1 = ["apple", "banana", "orange"]
const fruit2 = ["mango", "kiwi", "pear"]
const allFruit = [...fruit1, ...fruit2]
console.log(allFruit)

const flying = { canFly: true }
const car2 = { wheels: 4 }
const flyingCar = { ...flying, ...car2 }
console.log(flyingCar)

let veggies = ["carrot", "onion", "potato"]
veggies = [...veggies, "cabbage"]
console.log(veggies)

const greeting = "Hello"; 
const arrayOfChars = [...greeting]; 
console.log(arrayOfChars)

const car1 = {
    speed: 200, 
    color: "yellow"
}
const car3 = {...car1}
car1.speed = 201; 
console.log(car3)
console.log(car1)
console.log(car1.speed, car3.speed)

const meal = ['rice', 'beans', 'plantain']
let [starter] = meal
console.log(starter)

let answer = prompt("What is your name? "); 
if (typeof(answer) === "string") {
    var h1 = document.createElement("h1"); 
    h1.innerText = answer; 
    document.body.innerText = ''; 
    document.body.appendChild(h1); 
}

var h1 = document.createElement("h1"); 
h1.innerText = "Type into the input to make this text change"; 

var input = document.createElement("input"); 
input.setAttribute('type', 'text'); 

document.body.innerText = ''; 
document.body.appendChild(h1); 
document.body.appendChild(input); 

input.addEventListener('change', function() {
    // console.log(input.value); 
    h1.innerText = input.value; 
})


h1 = document.querySelector('h1'); 
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]
function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        case arr[3]:
            h1.innerText = arr[0]; // loop back to the first item
            break;
        default:
            h1.innerText = arr[0]; // default to the first item
    }
}

h1.addEventListener('click', handleClicks)