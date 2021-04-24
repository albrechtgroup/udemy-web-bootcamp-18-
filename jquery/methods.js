if(jQuery){
	alert("jQuery Loaded!");
} else {
	alert("No jQuery :");
}

$("button").on("click", function(){
    $('div').fadeOut(3000, function() {
        alert("Fade Completed.")
        console.log("Fade Completed.")
        $(this).remove();
    });
})

