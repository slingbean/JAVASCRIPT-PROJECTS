// Pizza Receipt Function

function getReceipt() {

    // Initializes the receipt text and pricing variables
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;

    // Gets all pizza size options
    var sizeArray = document.getElementsByClassName("size");

    // Checks which pizza size was selected
    for (var i = 0; i < sizeArray.length; i++) {

        if (sizeArray[i].checked) {

            var selectedSize = sizeArray[i].value;

            // Adds the selected pizza size to the receipt
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Determines the price of the selected pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;

    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;

    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;

    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;

    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    // Sets the starting total to the price of the pizza size
    runningTotal = sizeTotal;

    // Displays pizza size information in the console
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("Size text: " + text1);
    console.log("Subtotal: $" + runningTotal + ".00");

    // Passes the total and receipt text to the toppings function
    getTopping(runningTotal, text1);
}


// Pizza Toppings Function

function getTopping(runningTotal, text1) {

    // Initializes topping variables
    var toppingTotal = 0;
    var selectedTopping = [];

    // Gets all meat and vegetable toppings
    var toppingArray = document.getElementsByClassName("toppings");

    // Checks which toppings were selected
    for (var j = 0; j < toppingArray.length; j++) {

        if (toppingArray[j].checked) {

            // Stores each selected topping in an array
            selectedTopping.push(toppingArray[j].value);

            // Displays selected toppings in the console
            console.log("Selected topping: " + toppingArray[j].value);

            // Adds each topping to the receipt
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    // Counts the selected toppings
    var toppingCount = selectedTopping.length;

    // First topping is free, additional toppings cost $1 each
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;

    } else {
        toppingTotal = 0;
    }

    // Adds topping cost to the pizza price
    runningTotal = runningTotal + toppingTotal;

    // Displays pricing information in the console
    console.log("Total selected toppings: " + toppingCount);
    console.log("Topping total: $" + toppingTotal + ".00");
    console.log("Purchase total: $" + runningTotal + ".00");

    // Displays the receipt on the webpage
    document.getElementById("showText").innerHTML = text1;

    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
