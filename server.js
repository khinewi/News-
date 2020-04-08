require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var session = require("express-session");
var passport = require("./config/passport");
const app = express();

var db = require("./models");
const PORT = process.env.PORT || 8081;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/NewsDB")

//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );


// Connect to the MonGoose db
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });


