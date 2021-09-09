const express = require("express");
const app = express();
const PORT = 4000;

app.set("views", __dirname + "/");
app.set("view engine", "ejs");

// Without middleware
app.get("/", function (req, res) {
  res.render("test", { brah: "test" });
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
