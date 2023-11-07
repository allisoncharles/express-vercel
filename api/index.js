const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.send(`<h5 style="color:red">
  Hey Geek! you just deployed severless express api </h5>`);
});

app.listen(8080, () => {
  console.log("server started");
});

module.exports = app;
