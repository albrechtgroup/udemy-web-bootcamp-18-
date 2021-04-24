// const { request } = require("express");
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});
// mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Salmon Creek", 
//         image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"
//     }, (err, campground) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly Created Campground: ");
//             console.log(Campground);
//         }
//     });

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds", {
                campgrounds: allCampgrounds
            });
        }
    });
});

app.post("/campgrounds", (req, res) => {
    // get data from form and add it to the campgounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    // Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});


//localhost:3000
app.listen(3000, function () {
    console.log('=== Server listening on port 3000');
    console.log('=== YELP_CAMP has Started!!!');
});