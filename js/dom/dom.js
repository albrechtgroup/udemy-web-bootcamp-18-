var body = document.querySelector("body"); // Select
var isBlue = false;

setInterval(function() {   // manipulate
	if(isBlue) {
		body.style.background = "orange";
		} else {
			body.style.background = "red";
		}
		isBlue = !isBlue;
}, 2500);



// document.url
// document.links
// document.body
// document.head

/////////// METHODS


// document.getElememtById()

// document.getElementsByClassName()

// document.getElementsByTagName()

// document.querySelector()

// document.querySelectorAll()


//// ***DOM EXERCISE*** //////////////
//   *Come up with 4 ways to select the first <p> tag

// document.getElememtById("first");
document.getElementsByTagName("p");
document.querySelector(".special");
document.querySelectorAll(".special");





