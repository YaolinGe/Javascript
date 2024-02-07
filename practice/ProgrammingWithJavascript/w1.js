console.log("Hello World")

var petDog = "Rex"; 
var petCat = "Pepper"; 
console.log(petDog); 
console.log(petCat); 

console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);

var catSound = "purr"; 
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);

catSound = "meow";
console.log(petCat, "now says", catSound);

var petDog = 'Rex'; // Task 1 solution
console.log(petDog);

var score = 8; 
console.log("Mid-level skills: ", (score > 0 && score < 10))

var timeRemaining = 0; 
var energy = 10; 
console.log("Game over: ", (timeRemaining == 0 || energy == 0))

var num1 = 2; 
var num2 = 5; 
var test1 = num1 % 2; 
var test2 = num2 % 2; 
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

console.log(5 + 10);

var now = "Now in "; 
var three = 3; 
var d = "D!"; 
console.log(now + three + d)

var counter = 0; 
counter += 5; 
counter += 3; 
console.log(counter);

var result = 50; 
if (result < 50) {
    console.log("You failed");
}
else {
    console.log("You passed");
}

var age = 80; 
// add a pop up to ask for the user's age
// var age = prompt("What is your age?");

if (age >= 65)
{
    console.log("You get your income from your pension. ");
}
else if (age < 65 && age >= 18)
{
    console.log("Each month you get a salary."); 
}
else if (age < 18)
{
    console.log("You get an allowance."); 
}
else 
{
    console.log("The value of the age variable is not numerical. "); 
}

var day = "Sunday"; 
switch (day)
{
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("The value of the day variable is not a day of the week. ");
}

for (var i = 0; i < 11; i++)
{
    console.log("The value of i is: ", i);
}

var i = 0; 
while (i < 11)
{
    console.log("The value of i is: ", i);
    i++;
}

for (var i = 1; i < 6; i++)
{
    console.log(i); 
}
console.log("Counting completed!"); 

for (var i = 5; i > 0; i--)
{
    console.log(i); 
}
console.log("Countdown finished!"); 

var i = 1; 
while (i < 6)
{
    console.log(i);
    i += 1;  
}
console.log("Counting compoleted!"); 

var i = 5; 
while (i > 0)
{
    console.log(i); 
    i -= 1;
}
console.log("Countdown finished!"); 

var i = 2018; 
while (i < 2023)
{
    console.log(i); 
    i++; 
}

var cubes = "ABCDEFG"; 
for (var i = 0; i < cubes.length; i++)
{
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple; "; 
    console.log("%c" + cubes[i], styles); 
}

for (var i = 1; i <= 10; i++)
{
    if (i == 1)
    {
        console.log("Gold medal. "); 
    }
    else if (i == 2)
    {
        console.log("Silver medal. "); 
    }
    else if (i == 3)
    {
        console.log("Bronze medal. "); 
    }
    else 
    {
        console.log(i); 
    }
}

for (var i = 1; i < 11; i++)
{
    switch (i)
    {
        case 1:
            console.log("Gold medal. ");
            break;
        case 2:
            console.log("Silver medal. ");
            break;
        case 3:
            console.log("Bronze medal. ");
            break;
        default:
            console.log(i); 
    }
}