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