// This code will create a server - currently on my computer
// 

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require ("express-handlebars");
		// var routes = require ("./routes");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
// var axios = require("axios");
// var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();
			//var routes = require("./routes");

			// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// Configure middleware

// Use morgan logger for logging requests
// app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

		// app.use(routes);

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
		// mongoose.Promise = Promise;
		// mongoose.connect("mongodb://localhost/week18Populater", {
		//   useMongoClient: true
		// });

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
