const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/main.html");
});

app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Server is working on port 3000.")
});
