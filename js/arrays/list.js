var todos = ["Buy New Turtle"];

var input = prompt("What Would You Like to do?");

while(input !== "quit") {
	// Handle Input
	if(input === "list") {
	console.log(todos);
}	else if(input === "new") {
	// Ask for new todo
	var newTodo = prompt("Enter New todo");
	// Add to todos array
	todos.push(newTodo);
}
	// Ask again for new input
	input = prompt("What Would You Like to do?");
}

console.log("Ok, YOU QUIT THE APP!");