//This variable stores a person's name as a string
var personName = "Cara";

//This variable stores a number
var age = 35;

// Experiment 01
// The typeof operator determines the data type of a variable
// document.write displays the result in the browser
document.getElementById("typeResult").innerHTML =
    "personName: " + personName + "<br>" +
    "Data type: " + typeof personName;

// This document write statement demonstrates the required
// document.write method and typeof operator
document.write(" ");

// Experiment 02
// This expression combines a string and a number
// JavaScript converts the number to a string through type coercion
var introduction = "My age is " + age;

// Displays the string and number expression in the browser
document.getElementById("coercionResult").innerHTML = introduction;

// Experiment 03
// The double equals operator compares values after type coercion
var doubleEquals = (10 == "10");
//The triple equals operator compares both value and data type.
var tripleEquals = (10 === "10");

// The greater than operator checks whether one value is larger than another
var greaterThan = (10 > 5);

// The less than operator checks whether one value is smaller than another
var lessThan = (5 < 10);

// Displays the comparison results in the browser
document.getElementById("comparisonResult").innerHTML =
    "10 == \"10\" is " + doubleEquals + "<br>" +
    "10 === \"10\" is " + tripleEquals + "<br>" +
    "10 &gt; 5 is " + greaterThan + "<br>" +
    "5 &lt; 10 is " + lessThan;

// Experiment 04
// The double ampersand operator means AND
// Both conditions must be true
var andResult = (10 > 5 && 10 < 20);

// The double pipe operator means OR
// At least one condition must be true
var orResult = (10 < 5 || 10 < 20);

// The exclamation point means NOT
// It reverses a Boolean value
var notResult = !(10 > 5);

// Displays the logical operator results in the browser
document.getElementById("logicalResult").innerHTML =
    "10 &gt; 5 &amp; 10 &lt; 20 is " + andResult + "<br>" +
    "10 &lt; 5 || 10 &lt; 20 is " + orResult + "<br>" +
    "!(10 &gt; 5) is " + notResult;