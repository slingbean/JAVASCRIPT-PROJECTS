//This function creates a new fortune when the user click the button
function drawFortune() {

    //Generates a random number between 1 and 100
    var randomNumber = Math.random() * 99 + 1;

    //Uses toPrecision() to format the lucky number to four significant digits
    var luckyNumber = randomNumber.toPrecision(4);

    //Uses toString() to convert the lucky number into text
    var numberText = luckyNumber.toString();

    //Uses slice() to take the first two characters as the lucky digits
    var luckyDigits = numberText.slice(0, 2);

    //Converts the lucky digits into a number
    var digitValue = parseInt(luckyDigits);

    //Stores the possible fortune types
    var fortuneTypes = [
        {
            japanese: "&#22823;&#21513;",
            english: "Great Fortune",
            message: "Something unexpected is coming your way."
        },
        {
            japanese: "&#21513;",
            english: "Good Fortune",
            message: "Something you have been tending quietly will begin to grow."
        },
        {
            japanese: "&#20013;&#21513;",
            english: "Medium Fortune",
            message: "A steady path will lead you somewhere worthwhile."
        },
        {
            japanese: "&#23567;&#21513;",
            english: "Small Fortune",
            message: "Notice the small thing that goes right today."
        },
        {
            japanese: "&#26411;&#21513;",
            english: "Future Fortune",
            message: "What you are waiting for may need a little more time."
        },
        {
            japanese: "&#20982;",
            english: "Misfortune",
            message: "Move cautiously today. Not every door needs to be opened."
        }
    ];

    //Uses the lucky digits to select one of the fortune types
    var fortuneIndex = digitValue % fortuneTypes.length;

    //Gets the selected fortune
    var fortune = fortuneTypes[fortuneIndex];

    //Uses concat() to build the fortune number label
    var fortuneNumber = "NO. ".concat(
        String(fortuneIndex + 1).padStart(3, "0")
    );

    //Displays the fortune type
    document.getElementById("fortuneType").innerHTML = fortune.japanese;

    //Displays the english translation of the fortune type
    document.getElementById("fortuneTranslation").innerHTML = fortune.english;

    //Displays the lucky number
    document.getElementById("luckyNumber").innerHTML = luckyNumber;

    //Displays the lucky digits extracted using slice()
    document.getElementById("luckyDigits").innerHTML = luckyDigits;

    //Displays the fortune message
    document.getElementById("fortuneMessage").innerHTML = fortune.message;

    //Displays the fortune number
    document.getElementById("fortuneNumber").innerHTML = fortuneNumber;

    //Changes the button text after the first fortune is drawn
    document.getElementById("drawButton").innerHTML = "DRAW AGAIN\u2192";
}
//Waits until the webpage has finished loading before connecting the button
document.addEventListener("DOMContentLoaded", function() {

//Connects the Draw Fortune button to the drawFortune function
document.getElementById("drawButton").addEventListener("click", drawFortune);

});
