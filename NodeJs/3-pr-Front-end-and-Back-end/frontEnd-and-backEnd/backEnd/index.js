const express = require("express");
const cors = require("cors");

const PORT = 5000;

const app = express();

const users = [{ name: "Jonas", surname: "Girdzijauskas" }];

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(users);
});

app.post("/", (req, res) => {
  const { name } = req.body;
  const { surname } = req.body;

  users.push({ name, surname });

  res.send(users);
});

app.listen(PORT, () => console.log(`port is ${PORT}`));
