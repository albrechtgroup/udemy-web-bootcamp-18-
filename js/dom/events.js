var button = document.querySelector("button");
var isBlack = false;

button.addEventListener("click", function(){
	if(isBlack){
		document.body.style.background = "black";
		isBlack = false;
	} else {
		document.body.style.background = "yellow";
		isBlack = true;
	}	
});


//// *** OR ***
/// Much shorter Version

var button = document.querySelector("button");
var isBlack = false;

button.addEventListener("click", function(){
	document.body.classList.toggle("black");
});