
// Selects all slides from the HTML document 
var slides = document.querySelectorAll(".slide");

// Selects all film-strip thumbnail buttons
var thumbnails = document.querySelectorAll(".thumbnail");

// Selects the countdown and trip counter displays
var countdownDisplay = document.getElementById("countdown");
var tripCounter = document.getElementById("tripCounter");

// Selects the previous and next navigation buttons
var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");

// Stores the index of the currently displayed slide
var currentSlide = 0;

// Sets how many seconds each photo remains on screen
var timeLeft = 5;

// Stores the countdown interval so it can be managed
var countdownInterval;


// This function displays a selected slide 
function showSlide(index) {

    // Hides all slides and removes active thumbnail styling
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    thumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove("active");
    });

    // Displays the selected slide
    slides[index].classList.add("active");

    // Highlights the thumbnail that matches the selected slide
    thumbnails[index].classList.add("active");

    // Updates the trip number displayed above the photo
    tripCounter.textContent =
        "TRIP " + String(index + 1).padStart(2, "0") +
        " / " + String(slides.length).padStart(2, "0");
}


// This function updates the countdown text
function updateCountdownDisplay() {

    // Adds a leading zero when fewer than 10 seconds remain
    var formattedTime = String(timeLeft).padStart(2, "0");

    // Displays the remaining time before the next photo
    countdownDisplay.textContent = "NEXT MEMORY IN " + formattedTime;
}


// This function moves to the next photo
function nextSlide() {

    // Advances the slide index by one
    currentSlide++;

    // Returns to the first photo after the final photo
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Displays the new photo and highlights its thumbnail
    showSlide(currentSlide);

    // Resets the countdown for the new photo
    timeLeft = 5;

    // Updates the countdown display
    updateCountdownDisplay();
}


// This function moves to the previous photo 
function previousSlide() {

    // Moves the slide index back by one
    currentSlide--;

    // Returns to the last photo if the first photo is reached
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    // Displays the selected photo
    showSlide(currentSlide);

    // Resets the countdown for the selected photo
    timeLeft = 5;

    // Updates the countdown display
    updateCountdownDisplay();
}


// This function counts down before changing photos 
function countdown() {

    // Reduces the remaining time by one second
    timeLeft--;

    // Changes photos when the countdown reaches zero
    if (timeLeft <= 0) {

        // Advances to the next photo and resets the timer
        nextSlide();

    } else {

        // Displays the remaining countdown time
        updateCountdownDisplay();
    }
}


// Makes the next button advance the slideshow when clicked 
nextButton.addEventListener("click", function() {
    nextSlide();
});


// Makes the previous button go back when clicked 
previousButton.addEventListener("click", function() {
    previousSlide();
});


// Allows each film-strip thumbnail to select its photo 
thumbnails.forEach(function(thumbnail) {

    // Listens for a click on an individual thumbnail
    thumbnail.addEventListener("click", function() {

        // Reads the slide index from the button's data-slide attribute
        currentSlide = Number(thumbnail.getAttribute("data-slide"));

        // Displays the selected slide
        showSlide(currentSlide);

        // Restarts the countdown for the selected photo
        timeLeft = 5;

        // Updates the countdown display
        updateCountdownDisplay();
    });
});


// Starts the automatic countdown, ticking once per second 
countdownInterval = setInterval(countdown, 1000);


// Displays the first photo and initial countdown when the page loads 
showSlide(currentSlide);
updateCountdownDisplay();