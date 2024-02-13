// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (var item of dishData) {
        var finalPrice; 
        if (taxBoolean == true) {
            finalPrice = item.price * tax;
        } else if (taxBoolean == false) {
            finalPrice = item.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return -1;
        }
        console.log("Dish:", item.name, "Price: $" + finalPrice);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    if (typeof (guests) === 'number' && guests > 0 && guests < 30) {
        getPrices(taxBoolean);
        var discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log("Discount is: $" + discount);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}


// Call getDiscount()
// getPrices();
// getPrices(true); 
// getPrices(false);
getDiscount(true, 2);
getDiscount(false, 10);
getDiscount(false, 33);

// module.exports = {
//     getPrices,
//     getDiscount
// }