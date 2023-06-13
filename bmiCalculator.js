const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: "true" }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.use(express.static("public"));
app.post("/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / Math.pow(height, 2);

  if (result < 18.5) {
    res.send(`<script>
      window.alert("Your BMI is ${result}");
      setTimeout(function() {
        window.location.href = "/";
      }, 100);
      window.alert("This is considered underweight");
      setTimeout(function() {
        window.location.href = "/";
      }, 100);
    </script>`);
  } else if (result >= 18.5 && result < 25) {
    res.send(`<script>
      window.alert("Your BMI is ${result}");
      setTimeout(function() {
        window.location.href = "/";
      }, 100);
      window.alert("This is considered normal weight");
      setTimeout(function() {
        window.location.href = "/";
      }, 100);
    </script>`);
  } else {
    res.send(`<script>
      window.alert("Your BMI is ${result}");
      setTimeout(function() {
        window.location.href = "/";
      }, 100);
      window.alert("This is considered obese");
      setTimeout(function() {
        window.location.href = "/";
      }, 100);
    </script>`);
  }
});
app.listen(3000, function () {
  console.log("Server started at port 3000");
});
