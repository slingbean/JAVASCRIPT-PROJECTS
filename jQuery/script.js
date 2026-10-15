$(document).ready(function () {
    //shineLoop uses the animate event method by using the chaining technique to
    //utilize more than one event method in the same function
    function shineLoop() {
        $(".shine")
            .animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };
    //setInterval will repeat the about shineLoop function and 0 
    //sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrolled down by 50 pixels
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("headerScrolled");
        } else {
            $("h1").removeClass("headerScrolled");
        }
    });

    //Triggers the images to slide down to show each title one after the other
    //when the user's mouse enters the div area with the #classicCars ID
    $("#classiccars").on({
        mouseenter: function () {
            $("#title1").show(1000);
            $("#title2").show(1500);
            $("#title3").show(2000);
        }
    });

    //Triggers the images to slide up and hide each title one after the other
    //when the user's mouse leaves the div area with the #classicCars ID
    $("#classiccars").on({
        mouseleave: function () {
            $("#title1").hide(2000);
            $("#title2").hide(1500);
            $("#title3").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking each element's sibling 
    //so they don't all display when one question is clicked
    $('div.question').on('click', function () {
        $(this).next()
            .slideToggle('slow')
            .siblings('div.answer');
    });

})