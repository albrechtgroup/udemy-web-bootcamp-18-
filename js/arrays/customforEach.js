function myForEach(arr, func) {
	// Loop through array
	for(var i = 0; i < arr.length; i++) {
	// Call func for each item in array
	func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, alert);


// Anonomous Function

myForEach(colors, function(color) {
	console.log(color);
});




/// Later shit

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++){
		func(this[i]);
	}
}

var friends = ["charlie", "dave", "maddy", "pimpNick"];

friends.myForEach(alert);

friends.myForEach(function(name) {
	console.log("I Love " + name);
})