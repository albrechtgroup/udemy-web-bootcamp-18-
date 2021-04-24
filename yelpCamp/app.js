// const { request } = require("express");
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Granite Hill", image: "https://images.pexels.com/photos/1840421/pexels-photo-1840421.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Granite Hill", image: "https://images.pexels.com/photos/1840421/pexels-photo-1840421.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Granite Hill", image: "https://images.pexels.com/photos/1840421/pexels-photo-1840421.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&h=350"}   
];

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
    // get data from form and add it to the campgounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});


//localhost:3000
app.listen(3000, function() { 
    console.log('=== Server listening on port 3000');
    console.log('=== YELP_CAMP has Started!!!'); 
  });