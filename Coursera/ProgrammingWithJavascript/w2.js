function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the", match, "at", i);
        }
        else {
            console.log("---No match found at", i);
        }
    }
}

letterFinder("test", "t");

var table = {
    legs: 4,
    color: "brown",
    material: "wood"
}

console.log(table.color)

table["2022"] = 1000;
console.log(table);

var fruits = [];
fruits.push("apple");
fruits.push("banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.trunc(2.1));

var decimal = Math.random();
console.log(decimal);
console.log((decimal * 10));

var clothes = [];
clothes.push("shirt");
clothes.push("pants");
clothes.push("socks");
clothes.push("shoes");
clothes.push("hat");
clothes.pop();
clothes.push("jacket");
console.log(clothes[2]);
var favCar = {};
favCar.color = "black";
favCar.convertible = true;
console.log(favCar);

var car = {};
car.turnKey = function () {
    console.log("Engine running. ");
}
car.turnKey();

console.log((10).toString(2));
try {
    console.log((100).toString(100));
} catch (err) {
    console.log(err);
    console.log("H");
}
console.log("I'm still running.");

var letters = 'abc';
console.log(letters.match(/a/));

function addTwoNums(a, b) {
    try {
        if (typeof (a) != "number") {
            throw new ReferenceError("the first argument is not a number. ")
        }
        else if (typeof (b) != "number") {
            throw new ReferenceError("the second argument is not a number. ")
        }
        else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }

}

addTwoNums(5, "5");
console.log("It still works. ");

function letterFinder(word, match) {
    var condition1 = typeof (word) == 'string' && word.length > 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else {
        console.log("Please pass correct arguments to the function. "); 
    }
}

letterFinder("cat", "c"); 
letterFinder(2, 1); 

