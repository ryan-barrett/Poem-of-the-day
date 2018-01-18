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
let client = new twilio(
  "AC116080259b7a17d9de5b7983c9fdbf4a",
  "51645f695f272628db95d8eef8a6c3d4"
);
//
app.get("/", function(req, res) {
  res.sendFile("views/index.html", { root: __dirname });
});

app.post("/", function(req, res) {
  console.log(req.body.number);
  client.messages.create({
    to: "+1" + req.body.number,
    from: "+14152895379",
    body: "Hello from Twilio!"
  });
  // client.sendMessage();
});

app.listen(process.env.PORT || 3000, function() {
  console.log("poem of the day listening at http://localhost:3000/");
});
