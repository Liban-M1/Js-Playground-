Task (1)

/*
// Question 1
var numbreVariable1 = 1;
var numbreVariable2 = 2.2;

// Question 2
var workingDays = "Monday - Tuesday - Wednsday - Thursday - Friday";

console.log(workingDays);

// Question 3
var addition = "1 + 1" ;
var substraction = "2 - 2";
var multiplication = "3 * 3";
var division = "4 / 4";

// Question 4
var wrong = false;

// Question 5 
var q5 = "The frogs are angry";

console.log(q5.length);

// Question 6 
var timeElapsed; 
var totalPrice; 


// Question 7 
var number1 = "53";
var number2 = "44.6";

var int1 = parseInt(number1);

var float1 = parseFloat(number2);

console.log(int1);  // Output: 53
console.log(float1);  // Output: 44.6

// Question 8
var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

var tyeOfPet = typeof pet;
console.log(typeOfPet)

var typeOfAge = typeof age;
console.log(typeOfAge);

var typeOfDiscountApplied = typeof discountApplied;
console.log(typeOfDiscountApplied)

var typeOfTimeLeft = typeof timeLeft;
console.log(typeOfTimeLeft)

// Question 9 
var heading = "Updating heading";

var heading = document.querySelector('h1');

heading.innerHTML = headingText;

// Question 10
var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue"; 
*/



Task (2)

/*
// Question 1
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

// Question 2
var age = 11;
var minimumAge = "13";

    if (age <= minimumAge); {
        console.log("Under minimumage");
    }

// Question 3
var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
    console.log("maximum income requirement met");
} else {
    console.log("Maximum requirement not met");
}


// Question 4
var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish");
}


// Question 5
var invoicePaid = false;

if (invoicePaid === false){
    console.log ("Not paid")
}


// Question 6
var selectedNumber = 11;
var winningNumber = "15";

    if (selectedNumber !== parseInt(winningNumber)) {
        console.log ("You lose again");
}

    if (selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again");
}


// Question 7

var daysOfTheWeek = 2;
var dayOfTheWeek;

    switch (daysOfTheWeek) {
        case 1:
            dayOfTheWeek = "Monday";
            break;

       case 2:
            dayOfTheWeek = "Tusday";
            break;

       case 3:
            dayOfTheWeek = "Wednesday";
            break;

        case 4:
            dayOfTheWeek = "Thursday";
            break;

        case 5:
            dayOfTheWeek = "Friday";
            break;

        case 6:
            dayOfTheWeek = "Saturday";
            break;

        case 7:
            dayOfTheWeek = "Sunday";
            break;

        default:
            dayOfTheWeek = "Invalid day number";
            break;  
    }

    console.log(dayOfTheWeek);
*/

Task (3)
/* count down from 10 to 1
for (var i = 10; i >= 1; i--) {
    console.log(i);
}


for (var o = 10; o <= 20; o++) {
    if (o % 2 !== 0)
    console.log(o);
}
*/

Task (4)
/*
// Question 1
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if ((requiredName.toLocaleLowerCase.length) === (suppliedName.toLowerCase.length)) {
    console.log("Same length in characters");
}


// Question 2
var username = "myusername";

if ((username.length <= 4) || (username.length >= 10)) {
    console.log("Accepted username");
}

else {

if ((username.length <= 3)) {
    console.log("Too few characters");
}

if ((username.length >= 11)) {
    console.log("Too many characters");
}
}

// Qusetion 3 
var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if ((invoicePaid === true) && (productDispatched === false) && (customerHasSigned === false)) {
    console.log("Order complete");
}

else {
    if (!invoicePaid) {
        console.log("Invoice not paid")
    }

    if (!productDispatched) {
        console.log("Product Has dispatched")
    }

    if (!customerHasSigned) {
        console.log("Customer has signed")
    }
}

// Qusetion 4
if (!invoicePaid || !productDispatched || !customerHasSigned) {
    
    if (!invoicePaid) {
        console.log("Invoice is not paid")
    }
    if (!productDispatched) {
        console.log("Product Has dispatched")
    }
    if (!customerHasSigned) {
        console.log("Customer has signed")
    }
}

else {
    console.log("Order Complete")
}
*/

Task (5)

/*
// Quesiton 1

var winningNumbers = [1, 76, 2, 78, 16, 7];

console.log(winningNumbers[2]);

// Question 2

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("peas")
console.log(vegetables.length);

// Question 3

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
    var things = randomThings[i]
    console.log(things);
}

// Question 4

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

var numberValues = moreThings.filter(element => typeof element === "number");

console.log(numberValues);

// Question 5

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var ingredients1 = ingredients.sort();

for (var o = 0; o < ingredients1.length; o++) {
    var ingredients2 = ingredients1[o]
    console.log(ingredients2);
}

console.log(ingredients1);

// Question 6

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var p = 0; p < characters.length; p++) {

    if (p % 2 === 1) {
        console.log(characters[p]);
    }
}

*/