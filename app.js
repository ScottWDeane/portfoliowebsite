/*  Purpose: To be my own personal website.
    Have sections and links about my portfolio and any projects I'm currently working on.
    Will include my Python Job Application tracker, with screenshots, and new projects along the way.
    Start off small, with limited functionality, but will eventually add in new features as I fix my bloody IDE.
    Eventually would love to include mongoose/mongodb for adding/deleting content to show-off dynamic web pages.
    RESTful routing.
    
*/

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/projects", function(req, res){
    res.render("projects");
})

app.get("/socialMedia", function(req, res){
    res.render("socialMedia");
});

app.get("/jobAppMapper", function(req, res){
    res.render("jobAppMapper");
});

app.get("/oracleMovieRental", function(req, res){
    res.render("oracleMovieRental");
});

app.get("/yelpCamp", function(req, res){
    res.render("yelpCamp");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("My personal website server has started..."); 
});