var express = require("express"),
  bodyParser = require("body-parser");

var app = express();
app.use(express.static("public"));

var twilio = require("twilio");

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio("TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN");

// Send the text message.
client.messages.create({
  to: "YOUR_NUMBER",
  from: "YOUR_TWILIO_NUMBER",
  body: "Hello from Twilio!"
});

app.listen(process.env.PORT || 3000, function() {
  console.log("poem of the day listening at http://localhost:3000/");
});
