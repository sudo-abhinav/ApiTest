const express = require("express");
// const req = require("express/lib/request");
const format = require("date-format");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>hello mongo</h1>");
});

// TODO : route for instagram
app.get("/api/v1/instagram", (req, res) => {
  const instasocial = {
    userName: "sudo-abhinav",
    followers: 57,
    following: 87,
    Time: format.asString("hh:mm:ss", new Date()),
    Date: format.asString("hh:mm , dd.MM.yyyy", new Date()),
  };

  res.status(200).json(instasocial);
});

// TODO : route for facebook
app.get("/api/v1/facebook", (req, res) => {
  const instasocial = {
    userName: "abhinav kumar",
    followers: 250,
    following: 250,
    Time: format.asString("hh:mm:ss", new Date()),
    Date: format.asString("hh:mm , dd.MM.yyyy", new Date()),
  };

  res.status(200).json({ instasocial });
});

// TODO : route for Linkdein
app.get("/api/v1/linkdein", (req, res) => {
  const instasocial = {
    userName: "abhikr02",
    followers: 500,
    following: 480,
    // Time: format.asString("hh:mm:ss", new Date()),
    Date: format.asString("hh:mm , dd.MM.yyyy", new Date()),
  };

  res.status(200).json({ instasocial });
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ params: req.params.token });
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
