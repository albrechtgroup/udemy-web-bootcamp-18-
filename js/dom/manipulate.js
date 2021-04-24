///*** Example

// SELECT
var tag = document.getElementById("highlight");

// MANIPULATE Manually-- This is a bad idea
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

// This code is DRY {repeats}
 

// Instead **

// Rather than directly manip. style with JS, we can
// define a class and then toggle it on/off w/ JS

// Define a class in css (head, or CSS file
// .definedClass {
// 	color: blue;
// 	border: 10px solid blue;
// }

var tag = document.getElementById("highlight");
// ADD the new class to the selected element
tag.classList.add("definedClass");