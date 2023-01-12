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