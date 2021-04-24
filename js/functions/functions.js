// isEven function /////////////////////

function isEven(num){
	// Return True if even
	if(num % 2 === 0){
		return true;
	}
	// Return False otherwise
	else{
		return false;
	}
}

// OR* The shorter version**

function isEven(num){
	return num % 2 === 0;
}

// Factorial ////////////////////////////


function factorial(num){
	// Define a result variable
	var result =1;
	// Calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	// Return the result variable
	return result;
}


// kebabToSnake()

function kebabToSnake(str) {
	// Replace all "-", with "_"'s
	var newStr = str.replace(/-/g, "_");
	// Return str
	return newStr;
}