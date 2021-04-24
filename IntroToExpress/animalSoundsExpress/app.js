var express = require("express");
var app = express();

console.log("=======================================");
app.get("/", function(req, res){
    res.send("Hi There, Welcome to my assignment!!!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human!",
        goldfish: "..."
    }
    var animal = req.params.animal.toLocaleLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound +"'");
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result ="";

    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("SORRY, This page is not found. What are you doing with your life!?!");
});







app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });
