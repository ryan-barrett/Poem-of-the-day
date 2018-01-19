let express = require("express"),
  bodyParser = require("body-parser");

let app = express();
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

var twilio = require("twilio");

// Find your account sid and auth token in your Twilio account Console.
let client = new twilio("YOUR_ACCOUNT_SID", "YOUR_AUTH_TOKEN");
//
app.get("/", function(req, res) {
  res.sendFile("views/index.html", { root: __dirname });
});

app.post("/", function(req, res) {
  console.log(req.body.number);
  client.messages.create({
    to: "+1" + req.body.number,
    from: "YOUR_TWILIO_NUMBER",
    body: req.body.quote
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("poem of the day listening at http://localhost:3000/");
});
