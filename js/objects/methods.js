var gf = {
	name: "Mariya",
	age: 43,
	bodyGood: true,
	bestAssets: ["booty", "waist"],
	add: function(x,y){
		return x + y;
	}
}
/// Above i added a method 'add' to my gf object 
/// which is just a function added to object as a 
/// property same as strings, etc.


gf.add(33,4);
// Returns 37
// Similar to console.log(33,4);


/// ***Pre-Made JS functions are avail 
///  @  underscoreJs.org




///  Keyword - this./////////////////


var comments = {};

comments.data = ["Good Job!", "Bye", "LOL", "Lame"];

function print(arr){
	arr.forEach(function(element){
		console.log(element);
	});
}
/// Above function is Not method, caus its an outside
///  = 'Global'
print(comments.data);
/// prints each comment on seperate line in console



/// OR, using 'this'

comments.print = function(){
	this.data.forEach(function(element){
		console.log(element);
	});
}
comments.print();
/// prints each comment on seperate line in console
