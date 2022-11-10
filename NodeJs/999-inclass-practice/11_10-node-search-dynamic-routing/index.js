const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

const PORT = +process.env.PORT || 5001;
const users = [];

app.use(express.json());
app.use(cors());

app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users.find((curUser) => curUser.userId === userId);

  console.log(users);

  res.send(user).end();
});

app.post("/create-user", (req, res) => {
  const { age, firstName, userId } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof userId !== "string" ||
    !isNumber(age)
  ) {
    res.status(400).send({ message: "Invalid data provided" }).end();
    return;
  }

  const user = { age, firstName, userId };

  users.push(user);

  res.send("Labas");
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
