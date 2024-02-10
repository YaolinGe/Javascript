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
