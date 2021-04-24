var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

//Root Route
app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Blah Blah Blah", author: "Mariya"},
        {title: "I Know, Right!?!?", author: "Sunny"},
        {title: "The world is Ending!", author: "Julie"}
    ]

    res.render("posts", {posts: posts})
});



//localhost:3000
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });