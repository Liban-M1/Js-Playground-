// Question 1
const firstHeading = document.querySelector("h3");
firstHeading.innerHTML = "Hello";

// Question 2

const headings = document.querySelector("h4");

for ( let i = 0; i < headings.lenght; i++) {
    headings [i].style.marginBottom = "-20px";
}

// Question 3
const secondH4 = document.querySelector("h4.two");
secondH4.style.backgroundColor = "red";

// Questiion 4

const firstParagraph = document.querySelector("p.one");
firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";

// Question 5 

const thirdParagraph = document.querySelector("p.three");
thirdParagraph.innerHTML = "<span>" + thirdParagraph.innerHTML + "</span>";

// Question 6
const content = document.querySelector(".content");
content.innerHTML += "<p>Another paragraph</p>";

// Question 7
const contentParagraphs = document.querySelectorAll(".content p");

for(let i = 0; i < contentParagraphs.length; i++) {
    contentParagraphs[i].classList.add("content-item");
}

// Question 8
const list = document.querySelector("#services");
list.innerHTML = "<li>New item</li>" + list.innerHTML;

// Question 9
list.classList.remove("service-list");

// Question 10
const hideMe = document.querySelector("#hide");
hideMe.style.display = "none";















