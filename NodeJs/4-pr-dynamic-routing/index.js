const express = require("express");
const app = express();

app.use(express.json());

const PORT = 5000;

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.get("/", (_, res) => {
  res.send(cars).end();
});

app.get("/cars/:model", (req, res) => {
  const { model } = req.params;

  const car = cars[model];

  res.send(car).end();
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
