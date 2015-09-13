var interval = 5;
var transition_time = 3;
var background_num = 25;
var allow = true;

var main = function() {
	
	frame_setup();
	new_random_background();

	$('a').smoothScroll();

	$(".jumbotron").css("height", "" + window.innerHeight - 57 + "px");
}

function frame_setup() {
	var HEIGHT = window.innerHeight;
	var WIDTH = window.innerWidth;

	var jumbo = document.getElementById("jumbotron");

	// If on mobile, lower font size of jumbotron
	if (WIDTH < 500) {
		var hs = (WIDTH * 0.2);
		var ps = hs * 0.3;
		$(".jumbotron h1").css("font-size", "" + hs + "px");
		$(".jumbotron p").css("font-size", "" + ps + "px");

	} else {
		$(".jumbotron h1").css("font-size", "100px");
		$(".jumbotron p").css("font-size", "30px");

		//Account for resizing
		if (HEIGHT < 400) {
			jumbo.style.height = "400px";
		} else {
			jumbo.style.height = "" + HEIGHT - 57 + "px";
		}
	}
}

function random_background() {
	var num;
		num = Math.floor(Math.random() * background_num) + 1;
	return "url(Assets/img/backgrounds/" + num + ".jpeg)";
}

function new_random_background() {
	if (allow == true){
		$(".jumbotron").css("background-image", random_background());
		allow = false;
		window.setTimeout(function() {
			allow = true;
		}, transition_time * 1000);
	}
}

$(document).ready(main);