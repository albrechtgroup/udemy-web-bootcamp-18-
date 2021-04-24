 // var answer = prompt("Are we there yet?!?!");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?!?!");
// }

// alert("Yayyy, we made it!");


// Part 2

var answer = prompt("Are we there yet?!?!");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?!?!");
}

alert("Yayyy, we made it!");
