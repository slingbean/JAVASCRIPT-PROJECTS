// This function adds two numbers and displays the result.
function addition() {
    var result = 10 + 5;

    //Displays the answer in place of the question mark.
    document.getElementById("math").innerHTML = "10 + 5 = " + result;
}

//This function subtracts two numbers and dispalys the result
function subtraction() {
    var result = 10 - 5;

    //displays the answer in place of the question mark
    document.getElementById("subtraction").innerHTML = "10 - 5 = " + result;
}

//This function multiples two numbers and displays the result.
function multiplication() {
    var result = 10 * 5;

    //displays the answer in place of the question mark
    document.getElementById("multiplication").innerHTML = "10 x 5 = " + result;
}

//this function divides two numbers and displays the result
function division() {
    var result = 10 / 5;

    //displays the answer in place of the question mark
    document.getElementById("division").innerHTML = "10 &#247; 5 = " + result;
}

//This function performs multiple mathematical operations and displays the result.
function more_Math() {
    var simple_Math = (10 + 5) * 2 - 10 / 5;

    //displays the answer in place of the question mark
    document.getElementById("moreMath").innerHTML = "(10 + 5) x 2 - 10 &#247; 5 = " + simple_Math;
}

//This function uses the modulus operator and displays the remainder.
function modulus() {
    var result = 10 % 3;

    //displays the remainder in place of the question mark.
    document.getElementById("modulus").innerHTML = "10 &#247; 3 = 3 R " + result;
}

//This function uses the negation operator and displays the result.
function negation() {
    var result = -10;

    //displays the negative value in place of the question mark.
    document.getElementById("negation").innerHTML = "The negation of 10 = " + result;
}

//This function uses the increment operator and displays the result.
function increment() {
    var result = 10;
    result++;

    //displays the incremented value in place of the question mark.
    document.getElementById("increment").innerHTML = "10 + 1 = " + result;
}

//This function uses the decrement operator and displays the result.
function decrement() {
    var result = 10;
    result --;

    //displays the decremented value in place of the question mark.
    document.getElementById("decrement").innerHTML = "10 - 1 = " + result;
}

//This function uses Math.random() and displays a random number.
function randomNumber() {
    var result = Math.random();
    
    //displays the random number in place of the question mark.
    document.getElementById("random").innerHTML = "Random number: " + result;
}

//This function uses a JavaScript Math object method.
function mathObject() {
    var result = Math.round(7.6);

    //displays the Math.round() result in place of the question mark
    document.getElementById("mathObject").innerHTML = " Round 7.6 = " + result;
}



//This function marks the answers as correct with a checkmark
function checkAnswer() {
    var additionResult = 10 + 5;
    var subtractionResult = 10 - 5;
    var multiplicationResult = 10 * 5;
    var divisionResult = 10 / 5;
    var moreMathResult = (10 + 5) * 2 - 10 / 5;
    var modulusResult = 10 % 3;
    var negationResult = -10;
    var incrementResult = 10;
    incrementResult++;
    var decrementResult = 10;
    decrementResult--;
    var randomResult = Math.random();
    var mathObjectResult = Math.round(7.6);

    //displays the addition answer with a red checkmark
    document.getElementById("math").innerHTML = "10 + 5 = " + additionResult + ' <span class="check">&#10003;</span>';

    //displays the subtraction answer with a red checkmark
    document.getElementById("subtraction").innerHTML = "10 - 5 = " + subtractionResult + ' <span class="check">&#10003;</span>';

    //displays the multiplication answer with a red checkmark
    document.getElementById("multiplication").innerHTML = "10 x 5 = " + multiplicationResult + ' <span class="check">&#10003;</span>';

    //displays the division answer with a red checkmark
    document.getElementById("division").innerHTML = "10 &#247; 5 = " + divisionResult + ' <span class="check">&#10003;</span>';

    //displays the multiple-operation answer with a red checkmark
    document.getElementById("moreMath").innerHTML = "(10 + 5) x 2 - 10 &#247; 5 = " + moreMathResult + ' <span class="check">&#10003;</span>';

    //displays the modulus answer with a red checkmark
    document.getElementById("modulus").innerHTML = "10 % 3 = " + modulusResult + ' <span class="check">&#10003;</span>';

    //displays the negation answer with a red checkmark
    document.getElementById("negation").innerHTML = "The negation of 10 = " + negationResult + ' <span class="check">&#10003;</span>';

    //displays the increment answer with a red checkmark
    document.getElementById("increment").innerHTML = "10 + 1 = " + incrementResult + ' <span class="check">&#10003;</span>';

    //displays the decrement answer with a red checkmark
    document.getElementById("decrement").innerHTML = "10 - 1 = " + decrementResult + ' <span class="check">&#10003;</span';

    //displays the random number with a red checkmark
    document.getElementById("random").innerHTML = "Random number: " + randomResult + ' <span class="check">&#10003;</span>';

    //displays the Math object method result with a red checkmark
    document.getElementById("mathObject").innerHTML = "Math.round(7.6) = " + mathObjectResult + ' <span class="check">&#10003;</span>';


}


