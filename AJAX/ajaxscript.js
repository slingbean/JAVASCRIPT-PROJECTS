//AJAX Newsletter Signup
function getMsg() {
    //Step 1: Set up the XMLHttpRequest object
    let ajaxRequest = new XMLHttpRequest();
    //Get the user's name from the form
    let inputVal = document.getElementById("full-name").value;
    //Step 2: Prepare the request to retrieve Content.html
    ajaxRequest.open("GET", "content.html", true);
    //Step 3: Define the callback for a successful response
    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            //display the HTML received from the server
            document.getElementById("content").innerHTML =
            ajaxRequest.responseText;
            //personalize the thank-you message
            document.getElementById("thank-you-message").innerHTML =
            "<h2>Thank You, " + inputVal + "!</h2>" +
            "<p>Thank you for signing up for our newsletter.</p>";
        }
    };
    //Step 4: send the request
    ajaxRequest.send();
}