//This function assigns two variables and displays their values on the webpage.
function myFunction() {
    var sentence1 = "JavaScript makes websites ";
    var sentence2 = "interactive and dynamic.";

    //The plus-equals operator adds sentence2 to sentence1.
    sentence1 += sentence2;

    //This displays the combined sentence inside the paragraph element.

    document.getElementById("displayText").innerHTML = sentence1;
}
