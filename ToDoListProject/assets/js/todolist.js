// Check Off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

/// The LONG Code from Above^
// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 			$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 	});
// 	}
// 	else {
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 	});
// 	}
// });

//Click on X to delete Todo
$("ul").on("click", "span", function(Event){
	$(this).parent().fadeOut(750, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
});



///Below is 'Event Bubbling'
// $("span").click(function(){
// 	alert("Clicked on a span");
// });

// $("ul").click(function(){
// 	alert("Clicked on a ul");
// });

// $("#container").click(function(){
// 	alert("Clicked on Container DIV");
// });

// $("body").click(function(){
// 	alert("Clicked on the Mo-Fuckin Body");
// });