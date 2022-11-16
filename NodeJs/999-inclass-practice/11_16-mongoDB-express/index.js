const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
require("dotenv").config();

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;

app.use(express.json());

app.get("/", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db("node-mongo-first-project")
      .collection("users")
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/", async (req, res) => {
  try {
    const con = await client.connect();
    const dbRes = await con
      .db("node-mongo-first-project")
      .collection("users")
      .insertOne({ firstName: "Petras", surname: "Slekys", age: 20 });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
