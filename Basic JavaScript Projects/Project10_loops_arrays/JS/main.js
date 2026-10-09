
// =========================================
// CATCH THE PERFECT WAVE
// Project 10: Loops, Arrays, and Objects
// =========================================


// Stores the five waves in an array.
// Each wave is an object with its own properties.

var waves = [
    {
        name: "The Glassy One",
        height: "2–3 ft",
        difficulty: 1,
        points: 100,
        condition: "GLASSY",
        description: "Small, clean waves. A great chance to warm up."
    },
    {
        name: "The Rolling Set",
        height: "3–4 ft",
        difficulty: 2,
        points: 150,
        condition: "CLEAN",
        description: "A steady set is rolling in. Choose your moment."
    },
    {
        name: "The Heavy One",
        height: "5–6 ft",
        difficulty: 3,
        points: 250,
        condition: "HEAVY",
        description: "Powerful surf. This one will test your nerve."
    },
    {
        name: "The Long Ride",
        height: "4–5 ft",
        difficulty: 2,
        points: 200,
        condition: "RIDEABLE",
        description: "A promising wave with plenty of room to move."
    },
    {
        name: "The Final Set",
        height: "6–7 ft",
        difficulty: 3,
        points: 300,
        condition: "GNARLY",
        description: "Your final wave. Is this the one you'll remember?"
    }
];


// Creates a surfer object using the let keyword.
// The object stores the player's changing game statistics.

let surfer = {
    name: "Surfer",
    score: 0,
    lives: 3,
    wavesCaught: 0
};


// Tracks which wave the player is currently facing.
var currentWaveIndex = 0;


// Stores the outcome of each wave for the final recap.
var sessionHistory = [];


// Tracks whether the session is currently running.
var gameStarted = false;


// Selects the HTML elements used by the game. 

var scoreDisplay = document.getElementById("score");
var livesDisplay = document.getElementById("lives");
var waveNumberDisplay = document.getElementById("waveNumber");

var startScreen = document.getElementById("startScreen");
var gameScreen = document.getElementById("gameScreen");
var resultsScreen = document.getElementById("resultsScreen");

var startButton = document.getElementById("startButton");
var paddleButton = document.getElementById("paddleButton");
var waitButton = document.getElementById("waitButton");
var bailButton = document.getElementById("bailButton");
var continueButton = document.getElementById("continueButton");
var restartButton = document.getElementById("restartButton");

var waveTag = document.getElementById("waveTag");
var waveCondition = document.getElementById("waveCondition");
var waveTitle = document.getElementById("waveTitle");
var waveDescription = document.getElementById("waveDescription");
var waveHeight = document.getElementById("waveHeight");
var waveDifficulty = document.getElementById("waveDifficulty");
var wavePoints = document.getElementById("wavePoints");

var feedback = document.getElementById("feedback");

var resultTitle = document.getElementById("resultTitle");
var resultMessage = document.getElementById("resultMessage");
var finalScore = document.getElementById("finalScore");
var wavesCaughtDisplay = document.getElementById("wavesCaught");
var livesLeftDisplay = document.getElementById("livesLeft");
var sessionRecap = document.getElementById("sessionRecap");


// Updates the score, lives, and wave number on the page. 

function updateStats() {

    // Displays the player's current score.
    scoreDisplay.textContent = surfer.score;

    // Displays a heart for each remaining life.
    livesDisplay.textContent =
        "♥ ".repeat(surfer.lives).trim() || "—";

    // Displays the current wave and total number of waves.
    waveNumberDisplay.textContent =
        Math.min(currentWaveIndex + 1, waves.length) +
        " / " + waves.length;
}


// Displays the current wave and its conditions. 

function showCurrentWave() {

    // Gets the wave object at the current array index.
    var wave = waves[currentWaveIndex];

    // Updates the wave information displayed in the HTML.
    waveTag.textContent =
        "WAVE " + String(currentWaveIndex + 1).padStart(2, "0");

    waveCondition.textContent = wave.condition;
    waveTitle.textContent = wave.name;
    waveDescription.textContent = wave.description;
    waveHeight.textContent = wave.height;
    waveDifficulty.textContent =
        "Level " + wave.difficulty + " / 3";
    wavePoints.textContent = wave.points + " pts";

    // Hides the continue button until a choice is made.
    continueButton.hidden = true;

    // Enables all three choices for the new wave.
    paddleButton.disabled = false;
    waitButton.disabled = false;
    bailButton.disabled = false;

    // Updates the game statistics.
    updateStats();

    //Clear the previous wave's feedback message.
    feedback.textContent = "";
    feedback.hidden = true;
}


// Starts a new session and resets the player's statistics. 

function startGame() {

    // Resets the surfer object for a fresh game.
    surfer.score = 0;
    surfer.lives = 3;
    surfer.wavesCaught = 0;

    // Returns the game to the first wave.
    currentWaveIndex = 0;

    // Clears the results from any previous session.
    sessionHistory = [];

    // Marks the game as active.
    gameStarted = true;

    // Shows the gameplay area and hides other screens.
    startScreen.hidden = true;
    resultsScreen.hidden = true;
    gameScreen.hidden = false;

    // Displays the first wave.
    showCurrentWave();
}


// Handles the player's decision for the current wave. 

function makeChoice(choice) {

    // Prevents choices if the game isn't running.
    if (!gameStarted) {
        return;
    }

    // Gets the current wave object.
    var wave = waves[currentWaveIndex];

    // Stores the outcome of this decision.
    var outcome = "";

    // Stores the feedback message shown to the player.
    var message = "";

    // Prevents the player from choosing multiple actions
    // for the same wave.
    paddleButton.disabled = true;
    waitButton.disabled = true;
    bailButton.disabled = true;


    // OPTION 1: PADDLE FOR THE WAVE 

    if (choice === "paddle") {

        // Calculates the chance of catching the wave.
        // Harder waves have a lower success rate.
        var successChance = 0.9 - (wave.difficulty * 0.2);

        // Uses a random number to determine the result.
        if (Math.random() < successChance) {

            // Successful rides earn the wave's full points.
            surfer.score += wave.points;
            surfer.wavesCaught++;

            outcome = "Caught";
            message =
                "Beautiful ride! You caught " +
                wave.name + " and earned " +
                wave.points + " points.";

        } else {

            // A failed attempt costs one life.
            surfer.lives--;

            outcome = "Wipeout";
            message =
                "Wipeout! The wave was too powerful. " +
                "You lost a life. Read the next set carefully.";
        }
    }


    // OPTION 2: WAIT FOR THE NEXT WAVE 

    else if (choice === "wait") {

        // Waiting safely earns a small patience bonus.
        surfer.score += 20;

        outcome = "Waited";
        message =
            "Good patience. You let that wave pass " +
            "and earned 20 points for reading the ocean.";
    }


    // OPTION 3: BAIL OUT 

    else if (choice === "bail") {

        // Bailing out skips the wave and restores one life,
        // but the player cannot exceed three lives.
        if (surfer.lives < 3) {
            surfer.lives++;
            message =
                "You sat this one out and caught your breath. " +
                "You recovered one life.";
        } else {
            message =
                "You played it safe and skipped the wave. " +
                "Your lives are already full.";
        }

        outcome = "Bailed";
    }


    // Saves the outcome as an object in the session array. 

    sessionHistory.push({
        waveName: wave.name,
        choice: choice,
        outcome: outcome,
        pointsEarned:
            choice === "paddle" && outcome === "Caught"
                ? wave.points
                : choice === "wait"
                    ? 20
                    : 0,
        message: message
    });

    // Displays feedback for the player's decision.
    feedback.textContent = message;
    feedback.hidden = false;

    // Updates the score and lives immediately.
    updateStats();

    // Shows the button for moving to the next wave or results.
    continueButton.hidden = false;

    // Changes the button label when the session should end.
    if (
        currentWaveIndex === waves.length - 1 ||
        surfer.lives <= 0
    ) {
        continueButton.textContent = "VIEW RESULTS →";
    } else {
        continueButton.textContent = "NEXT WAVE →";
    }
}


// Moves to the next wave or ends the session. 

function continueSession() {

    // Ends the session if the player ran out of lives.
    if (surfer.lives <= 0) {
        endGame();
        return;
    }

    // Ends the session after the final wave.
    if (currentWaveIndex >= waves.length - 1) {
        endGame();
        return;
    }

    // Advances to the next wave.
    currentWaveIndex++;

    // Displays the next wave's information.
    showCurrentWave();
}


// Uses a WHILE loop to calculate the session statistics. 

function calculateSessionStats() {

    // These variables hold the totals for the recap.
    var caughtCount = 0;
    var wipeoutCount = 0;
    var waitedCount = 0;
    var bailedCount = 0;

    // Starts at the first recorded wave.
    var index = 0;

    // The while loop processes each recorded decision.
    // It stops when every entry has been checked.

    while (index < sessionHistory.length) {

        // Gets the outcome of the current recorded wave.
        var record = sessionHistory[index];

        // Counts each type of outcome.
        if (record.outcome === "Caught") {
            caughtCount++;
        } else if (record.outcome === "Wipeout") {
            wipeoutCount++;
        } else if (record.outcome === "Waited") {
            waitedCount++;
        } else if (record.outcome === "Bailed") {
            bailedCount++;
        }

        // Moves to the next history entry.
        // This prevents the while loop from running forever.
        index++;
    }

    // Returns the totals in an object for other functions.
    return {
        caught: caughtCount,
        wipeouts: wipeoutCount,
        waited: waitedCount,
        bailed: bailedCount
    };
}


// Uses a FOR loop to display the session recap.

function displaySessionRecap() {

    // Clears any recap left from a previous game.
    sessionRecap.textContent = "";

    // The for loop processes each saved wave record
    // and creates a list item for the final results.

    for (var i = 0; i < sessionHistory.length; i++) {

        // Gets the saved information for this wave.
        var record = sessionHistory[i];

        // Creates a new HTML list item.
        var listItem = document.createElement("li");

        // Formats the wave name, outcome, and points.
        listItem.textContent =
            record.waveName + " — " +
            record.outcome + " — +" +
            record.pointsEarned + " pts";

        // Adds the list item to the recap on the page.
        sessionRecap.appendChild(listItem);
    }
}


// Ends the game and displays the final results.

function endGame() {

    // Marks the game as no longer active.
    gameStarted = false;

    // Calculates the final statistics using the while loop.
    var stats = calculateSessionStats();

    // Hides gameplay and displays the results screen.
    gameScreen.hidden = true;
    resultsScreen.hidden = false;

    // Displays the final score and session statistics.
    finalScore.textContent = surfer.score;
    wavesCaughtDisplay.textContent =
        stats.caught + " / " + waves.length;
    livesLeftDisplay.textContent = surfer.lives;

    // Chooses a result title based on the player's score.
    if (surfer.score >= 600) {
        resultTitle.textContent = "WAVE HUNTER!";
        resultMessage.textContent =
            "An incredible session. You and the ocean were in sync.";
    } else if (surfer.score >= 300) {
        resultTitle.textContent = "WEEKEND WARRIOR";
        resultMessage.textContent =
            "Solid surfing. You're learning when to commit and when to wait.";
    } else {
        resultTitle.textContent = "KOOK IN TRAINING";
        resultMessage.textContent =
            "Every session teaches you something. Paddle back out and try again.";
    }

    // Displays the detailed list of wave outcomes.
    displaySessionRecap();

    // Updates the wave counter for the completed session.
    waveNumberDisplay.textContent =
        sessionHistory.length + " / " + waves.length;
}


// Connects the start button to the startGame function. 

startButton.addEventListener("click", function() {
    startGame();
});


// Connects each player choice to the makeChoice function. 

paddleButton.addEventListener("click", function() {
    makeChoice("paddle");
});

waitButton.addEventListener("click", function() {
    makeChoice("wait");
});

bailButton.addEventListener("click", function() {
    makeChoice("bail");
});


// Connects the continue button to the next session step. 

continueButton.addEventListener("click", function() {
    continueSession();
});


// Allows the player to restart the game after the results. 

restartButton.addEventListener("click", function() {
    startGame();
});
