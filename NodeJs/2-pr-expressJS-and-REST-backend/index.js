const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5001;

app.use(cors());

const cars = ["BMW", "VW", "Porsche"];

app.get("/", (req, res) => {
  res.send(cars);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
