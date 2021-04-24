/// Creating an empty object (same as arrays)/////////

// Make an empty object and then add to it
var person = {};
person.name = "Andy";
person.age = 33;
person.city = "Brooklyn";

// All at once
var person = {
	name: "Andy",
	age: 33,
	city: "Brooklyn"
};

console.log(person.city);
// Brooklyn


// Another way of initializing an Object
var person = new Object();
person.name = "Andy";
person.age = 33;
person.city = "Brooklyn";


////////// Exercise

var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"}
	],
	color: "baby blue",
	isEvil: true
};

// Write code to retreive "Malfoy" from someObject
// Go one "layer" at a time!

someObject.friends[0].name;

// Returns "Malfoy"

