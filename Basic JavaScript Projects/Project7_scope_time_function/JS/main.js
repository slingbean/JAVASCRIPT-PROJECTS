// Global variable: this can be accessed throughtout the script
var reminderSource = "A Daily Note";

// This function creates and displays the daily note.
function showDailyNote() {

    //Displays the global variable as the page title
    document.getElementById("noteTitle").innerHTML = reminderSource;

    //Local variable: gets the current hour from the Date object
    var currentHour = new Date().getHours();

    //Gets the current minutes from the Date object
    var currentMinute = new Date().getMinutes();

    //Stores the message that will be displayed
    var timeOfDay;

    //uses an if statement to determine the message and theme
    if (currentHour < 12) {
        dailyMessage = "Begin gently. You don't have to have everything figured out.";
        timeOfDay = "morning";
    } else if (currentHour < 18) {
        dailyMessage = "Keep going. Small progress is still progress.";
        timeOfDay = "afternoon";
    } else if (currentHour < 21) {
        dailyMessage = "You did enough today. Let the day be finished.";
        timeOfDay = "evening";
    } else {
        dailyMessage = "Rest is part of the work.";
        timeOfDay = "night";
    }

    //Changes the page theme based on the time of day
    document.body.className = timeOfDay;

    //Changes the sun into a moon during the evening and night
    if (timeOfDay === "evening" || timeOfDay === "night") {
        document.getElementById("celestial").innerHTML =
            '<div class="moon"</div>';
    } else {
        document.getElementById("celestial").innerHTML =
            '<div class="sun"></div>';
    }

    //Adds a leading zero to minutes when needed.
    var formattedMinute = currentMinute.toString().padStart(2, "0");

    //Determines whether the time is AM or PM
    var period = currentHour >= 12 ? "PM" : "AM";

    //Converts the 24-hour clock to a 12-hour clock
    var displayHour = currentHour % 12;

    //Changes 0 to 12 for 12 AM and 12 PM
    if (displayHour === 0) {
        displayHour = 12;
    }

    //Displays the current time on the webpage
    document.getElementById("currentTime").innerHTML =
        displayHour + ":" + formattedMinute + " " + period;

    //Displays the daily message on the webpage
    document.getElementById("dailyMessage").innerHTML = dailyMessage;

    //Stores the names of the days of the week
    var daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    //Gets the current day of the week
    var currentDay = new Date().getDay();

    //Stores the names of the months of the year
    var monthsOfYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    //Gets the current month, date, and year
    var currentMonth = new Date().getMonth();
    var currentDate = new Date().getDate();
    var currentYear = new Date().getFullYear();

    //Combines the Date methods into a complete date
    var formattedDate =
        daysOfWeek[currentDay] + ", "
        + monthsOfYear[currentMonth] + " "
        + currentDate + ", "
        + currentYear;

    //Displays today's date at the bottom of the page
    document.getElementById("currentDate").innerHTML = formattedDate;
}

//Runs the function when the webpage loads
showDailyNote();