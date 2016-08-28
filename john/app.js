var main = function() {
    
    frame_setup();
    new_random_background();

    $(".jumbotron").css("height", "" + window.innerHeight + "px");
}

function frame_setup() {
    var HEIGHT = window.innerHeight;
    var WIDTH = window.innerWidth;

    var jumbo = document.getElementById("jumbotron");

    var BOUND = 800
    var RATIO = WIDTH/BOUND
    // If on mobile, lower font size of jumbotron
    if (WIDTH < BOUND) {
        var hs = (WIDTH * 0.10);
        var ps = hs * 0.25;
        $(".jumbotron h1").css("font-size", "" + 100*RATIO + "px");
        $(".jumbotron p").css("font-size", "" + 30*RATIO + "px");
        $(".jumbotron").css("height", "" + 400*RATIO + "px");
        $("ul li").css("font-size", "" + 30*RATIO + "px");
        $("ul li").css("padding", "" + 50*RATIO + "px");
    }
}

$(document).ready(main);