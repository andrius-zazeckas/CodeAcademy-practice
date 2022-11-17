const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
require("dotenv").config();

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;

const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    res.status(400).send("First name and last name was not provided.").end();
    return;
  }

  if (typeof firstName !== "string" || typeof lastName !== "string") {
    res
      .status(400)
      .send("First name and last name was provided incorrectly.")
      .end();
    return;
  }

  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({ firstName, lastName });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
