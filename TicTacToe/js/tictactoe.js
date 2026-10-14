/* ========================================
   TIC TAC TOE GAME
======================================== */

// This variable keeps track of whose turn it is.
let activePlayer = 'X';

// This array stores the moves used to determine win conditions.
let selectedSquares = [];

// This variable prevents additional moves after a win or tie.
let gameOver = false;


/* ========================================
   PLACE X OR O
======================================== */

// This function places an X or O in a square.
function placeXOrO(squareNumber) {

    // Converts the square number to a string.
    // This ensures the computer and player use the same format.
    squareNumber = String(squareNumber);

    // Prevents moves after the game has ended.
    if (gameOver) {
        return false;
    }

    // Checks whether the selected square is already occupied.
    // The .some() method checks each element of the array.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        // Retrieves the HTML element that was clicked.
        let select = document.getElementById(squareNumber);

        // Checks whose turn it is.
        if (activePlayer === 'X') {

            // Places the X image in the selected square.
            select.style.backgroundImage = 'url("images/x.png")';

        } else {

            // Places the O image in the selected square.
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // Combines the square number and active player.
        // Example: "0X" or "4O".
        selectedSquares.push(squareNumber + activePlayer);

        // Plays the placement sound.
        audio('./media/place.mp3');

        // Checks whether the move resulted in a win or tie.
        checkWinConditions();

        // Stops the turn if the game has ended.
        if (gameOver) {
            return true;
        }

        // Changes the active player.
        if (activePlayer === 'X') {

            // If the player was X, change to O.
            activePlayer = 'O';

        } else {

            // If the player was O, change to X.
            activePlayer = 'X';
        }

        // Checks whether it is the computer's turn.
        if (activePlayer === 'O') {

            // Temporarily disables clicking.
            disableClick();

            // Waits one second before the computer makes a move.
            setTimeout(function () {
                computersTurn();
            }, 1000);
        }

        // Returns true when a square is successfully selected.
        return true;
    }

    // Returns false when the square is already occupied.
    return false;
}


/* ========================================
   COMPUTER'S TURN
======================================== */

// This function selects a random available square.
function computersTurn() {

    // Prevents the computer from playing after the game ends.
    if (gameOver) {
        return;
    }

    // This boolean controls the while loop.
    let success = false;

    // Stores a random square number between 0 and 8.
    let pickASquare;

    // Continues until an available square is selected.
    while (!success) {

        // Generates a random number between 0 and 8.
        pickASquare = String(Math.floor(Math.random() * 9));

        // Attempts to place O in the selected square.
        if (placeXOrO(pickASquare)) {

            // Ends the loop when a valid square is found.
            success = true;
        }
    }
}


/* ========================================
   CHECK WIN CONDITIONS
======================================== */

// This function checks the selectedSquares array for wins and ties.
function checkWinConditions() {

    // X wins across the top row.
    if (arrayIncludes('0X', '1X', '2X')) {
        drawWinLine(50, 100, 558, 100);
    }

    // X wins across the middle row.
    else if (arrayIncludes('3X', '4X', '5X')) {
        drawWinLine(50, 304, 558, 304);
    }

    // X wins across the bottom row.
    else if (arrayIncludes('6X', '7X', '8X')) {
        drawWinLine(50, 508, 558, 508);
    }

    // X wins down the left column.
    else if (arrayIncludes('0X', '3X', '6X')) {
        drawWinLine(100, 50, 100, 558);
    }

    // X wins down the middle column.
    else if (arrayIncludes('1X', '4X', '7X')) {
        drawWinLine(304, 50, 304, 558);
    }

    // X wins down the right column.
    else if (arrayIncludes('2X', '5X', '8X')) {
        drawWinLine(508, 50, 508, 558);
    }

    // X wins diagonally from top right to bottom left.
    else if (arrayIncludes('2X', '4X', '6X')) {
        drawWinLine(100, 508, 520, 100);
    }

    // X wins diagonally from top left to bottom right.
    else if (arrayIncludes('0X', '4X', '8X')) {
        drawWinLine(100, 100, 520, 520);
    }

    // O wins across the top row.
    else if (arrayIncludes('0O', '1O', '2O')) {
        drawWinLine(50, 100, 558, 100);
    }

    // O wins across the middle row.
    else if (arrayIncludes('3O', '4O', '5O')) {
        drawWinLine(50, 304, 558, 304);
    }

    // O wins across the bottom row.
    else if (arrayIncludes('6O', '7O', '8O')) {
        drawWinLine(50, 508, 558, 508);
    }

    // O wins down the left column.
    else if (arrayIncludes('0O', '3O', '6O')) {
        drawWinLine(100, 50, 100, 558);
    }

    // O wins down the middle column.
    else if (arrayIncludes('1O', '4O', '7O')) {
        drawWinLine(304, 50, 304, 558);
    }

    // O wins down the right column.
    else if (arrayIncludes('2O', '5O', '8O')) {
        drawWinLine(508, 50, 508, 558);
    }

    // O wins diagonally from top right to bottom left.
    else if (arrayIncludes('2O', '4O', '6O')) {
        drawWinLine(100, 508, 520, 100);
    }

    // O wins diagonally from top left to bottom right.
    else if (arrayIncludes('0O', '4O', '8O')) {
        drawWinLine(100, 100, 520, 520);
    }

    // Checks for a tie when all nine squares are occupied.
    else if (selectedSquares.length >= 9) {

        // Prevents additional moves.
        gameOver = true;

        // Plays the tie-game sound.
        audio('./media/tie.mp3');

        // Waits before resetting the game.
        setTimeout(function () {
            resetGame();
        }, 1000);
    }
}


/* ========================================
   ARRAY INCLUDES
======================================== */

// This function checks whether the array contains three strings.
function arrayIncludes(squareA, squareB, squareC) {

    // Checks whether each square exists in the array.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    // Returns true when all three squares are found.
    if (a === true && b === true && c === true) {
        return true;
    }

    // Returns false when a winning combination is not found.
    return false;
}


/* ========================================
   DISABLE CLICK
======================================== */

// This function temporarily makes the body unclickable.
function disableClick() {

    // Retrieves the HTML body element.
    const body = document.getElementById('body');

    // Disables clicking.
    body.style.pointerEvents = 'none';

    // Enables clicking again after one second.
    setTimeout(function () {
        body.style.pointerEvents = 'auto';
    }, 1000);
}


/* ========================================
   AUDIO
======================================== */

// This function plays an audio file using its path.
function audio(audioURL) {

    // Creates a new audio object.
    let audio = new Audio(audioURL);

    // Plays the selected sound.
    audio.play();
}


/* ========================================
   DRAW WIN LINE
======================================== */

// This function uses HTML canvas to draw a winning line.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {

    // Prevents additional moves after a win.
    gameOver = true;

    // Retrieves the HTML canvas element.
    const canvas = document.getElementById('win-lines');

    // Gets the 2D drawing context.
    const c = canvas.getContext('2d');

    // Stores the starting and ending coordinates.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    // Stores the animation frame so it can be cancelled.
    let animationLoop;

    // This function animates the winning line.
    function animateLineDrawing() {

        // Requests the next animation frame.
        animationLoop = requestAnimationFrame(animateLineDrawing);

        // Clears the previous frame.
        c.clearRect(0, 0, 608, 608);

        // Begins a new drawing path.
        c.beginPath();

        // Moves to the starting point.
        c.moveTo(x1, y1);

        // Draws toward the current endpoint.
        c.lineTo(x, y);

        // Sets the width of the winning line.
        c.lineWidth = 10;

        // Sets the colour of the winning line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';

        // Draws the line.
        c.stroke();

        // Handles lines moving right and downward.
        if (x1 <= x2 && y1 <= y2) {

            if (x < x2) {
                x += 10;
            }

            if (y < y2) {
                y += 10;
            }

            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }

        // Handles diagonal lines moving right and upward.
        if (x1 <= x2 && y1 >= y2) {

            if (x < x2) {
                x += 10;
            }

            if (y > y2) {
                y -= 10;
            }

            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }

        // Handles lines moving left and downward.
        if (x1 >= x2 && y1 <= y2) {

            if (x > x2) {
                x -= 10;
            }

            if (y < y2) {
                y += 10;
            }

            if (x <= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }

        // Handles lines moving left and upward.
        if (x1 >= x2 && y1 >= y2) {

            if (x > x2) {
                x -= 10;
            }

            if (y > y2) {
                y -= 10;
            }

            if (x <= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
    }

    // This function clears the canvas after the animation.
    function clear() {
        c.clearRect(0, 0, 608, 608);
    }

    // Disables clicking while the winning line appears.
    disableClick();

    // Plays the win sound.
    audio('./media/winGame.mp3');

    // Starts the winning line animation.
    animateLineDrawing();

    // Waits one second, clears the canvas, and resets the game.
    setTimeout(function () {

        // Stops the animation.
        cancelAnimationFrame(animationLoop);

        // Clears the winning line.
        clear();

        // Resets the game.
        resetGame();

    }, 1000);
}


/* ========================================
   RESET GAME
======================================== */

// This function resets the game after a win or tie.
function resetGame() {

    // Loops through all nine HTML squares.
    for (let i = 0; i < 9; i++) {

        // Retrieves each square by its ID.
        let square = document.getElementById(String(i));

        // Removes the X or O background image.
        square.style.backgroundImage = '';
    }

    // Empties the selectedSquares array.
    selectedSquares = [];

    // Resets the active player to X.
    activePlayer = 'X';

    // Allows the next game to begin.
    gameOver = false;
}
