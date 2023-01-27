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

task (5)

/*

// Question 1
var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price);

// Question 2
var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];


for (var i = 0; i < animals.length; i++) {
    var animalsColour = animals[i].colour;
    console.log(animalsColour);
}

// Question 3
var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (var i = 0; i < dinnerOptions.length; i++) {
    var isOnSpecial = dinnerOptions[i].onSpecial;
    var productName = dinnerOptions[i].name;
    
    if (isOnSpecial === true) {
        console.log(productName);
    }
}

// Question 4
var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (var i = 0; i < people.length; i++) {
    var firstLast = people[i].firstName + " " + people[i].lastName;
    var ofAge = people[i].age;

    if (ofAge >= 20 && ofAge <= 50) {
        console.log(firstLast)
    }
    
    
}

// Question 5 
var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];



for (var i = 0; i < products.length; i++) {
    var productInfo = products[i].name + " - " + products[i].price;
    productContainer.innerHTML = productContainer.innerHTML + "<li>" + productInfo + "<li>";

}

console.log(productInfo)

*/

task (6)

/*
// Questions 1
const instrument = "guitar";
console.log(instrument);

// Question 2
const button = document.querySelector("button.login");
console.dir(button);

// Question 3
const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];

console.table(instruments);

// Question 4 
const name = "Percival";
let age = 13;

// Question 5
let total = 0;
total = total + 10;

console.log(total);

// Question 6 
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Question 7
const firstName = `Florence`;

const introduction = `Hello, my name is ${firstName}.`;

console.log(introduction);

// Question 8
const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome!

This ${title} is starting today.

Have a ${whatToHave}!`;

console.log(welcome);

// Question 9
const car = {
    "paint-colour": "red",
    "number of wheels": 3
};

console.log(car["paint-colour"]);
console.log(car["number of wheels"]);

// Question 10 
const product = {
    name: "Chicken Lips",
    price: 35,
    expired: false
	
}

function getExpired(product) {
	if (product.expired === true) {
		return "This product has expired";
	} else {
		return "This product has not expired";
	}
}

console.log(getExpired(product));
*/