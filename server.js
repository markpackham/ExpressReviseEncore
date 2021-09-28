const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.download("server.js");
  //   res.json({ message: "Hi there" });
  res.render("index", { text: "World" });
});

app.listen(3000);
