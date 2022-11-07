const express = require("express");

const app = express();
const PORT = 5_001;

app.use(express.json());

app.get("/", (_, res) => {
  // vietoj req panaudojam _
  res.send({ age: 27 });
});

app.post("/", (req, res) => {
  const age = req.body.age;

  const providedAge = age ? age : 0;

  res.send({ age: providedAge * 2 });
});

app.listen(PORT, () => {
  console.log(`${PORT} Server is running`);
});
