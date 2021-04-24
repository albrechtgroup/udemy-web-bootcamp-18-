/// For VS. ForEach


// Using a for loop
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}


// Using a forEach loop --  MOST POPULAR**
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color) {
	console.log(color);
});


// Using a while loop --   RARE**
var count = 0;

while(count < colors.length) {
	console.log(colors[count]);
	count++;
}


/////  EXERCISE**
var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
	if(color % 3 === 0) {
		console.log(color);
	}
});

//// Tricky, because "color" is used 
///      to reference the numbers array
