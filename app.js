const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile("main.html");
});

app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Server is working on port 3000.")
});