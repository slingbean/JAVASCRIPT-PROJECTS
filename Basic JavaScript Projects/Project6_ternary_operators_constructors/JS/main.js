// This function checks the wave height entered by the user
function checkWaves() {
    
    // Gets the wave height entered into the browser input
    var waveHeight = document.getElementById("waveHeight").value;

    //Uses a ternary operator to determine the difficulty of the waves
    var waveResult = waveHeight <= 4
        ? "These waves are beginner friendly."
        : "These waves may be challenging.";

    //Displays the ternary operator result on the webpage
    document.getElementById("waveResult").innerHTML = waveResult;

    //Displays the surf session using the wave height entered by the user
    displaySession(waveHeight);
}

//This constructor function creates a SurfSession object
function SurfSession(location, waveHeight, conditions) {

    //The "this" keyword assigns information to the new object
    this.location = location;
    this.waveHeight = waveHeight;
    this.conditions = conditions;
}

// This function creates and displays the surf session information
function displaySession(waveHeight) {

    //uses a ternary operator to determine the surf conditions based on wave height
    var conditions = waveHeight <= 4
        ? "Clean and manageable."
        : "Powerful and challenging";

    //creates a new surf session object using the SurfSession constructor
    var session = new SurfSession(
        "Cox Bay",
        waveHeight,
        conditions
    );

    //This is a nested function inside displaySession
    function sessionDescription() {

        //creates a description using information from the session object
        return session.location + " / "
            + session.waveHeight + " ft / "
            + session.conditions;
    }

    //Displays the constructor results inside the HTML element
    document.getElementById("sessionInfo").innerHTML = sessionDescription();
}
