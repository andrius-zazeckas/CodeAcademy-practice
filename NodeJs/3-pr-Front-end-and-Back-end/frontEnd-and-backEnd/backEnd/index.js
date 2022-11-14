const express = require("express");
const cors = require("cors");

const PORT = 5000;

const app = express();

const users = [{ name: "Andrius", surname: "Zažeckas" }];

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(users);
});

app.post("/", (req, res) => {
  const { name, surname } = req.body;

  const isDuplicateName = users.find((user) => user.name === name);
  const isDuplicateSurname = users.find((user) => user.surname === surname);

  if (!name || typeof name !== "string") {
    res.status(400).end("Incorret name provided");
    return;
  }

  if (isDuplicateName && isDuplicateSurname) {
    res.status(400).end("This name already exists.");
    return;
  }

  users.push({ name, surname });

  res.send(users);
  res.end();
});

app.listen(PORT, () => console.log(`port is ${PORT}`));
