const express = require("express");
const cors = require("cors");

const app = express();
const PORT = +process.env.PORT || 5001;

app.use(express.json());

app.use(cors());

const cars = ["BMW", "VW", "Porsche"];

app.get("/", (_, res) => {
  res.send(cars);
});

app.post("/", (req, res) => {
  const car = req.body?.car;

  cars.push(car);

  res.send(cars);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
