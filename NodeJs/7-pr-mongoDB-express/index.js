const express = require("express");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
app.use(express.json());

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;

app.get("/", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("cao-7-pr-mongodb-express")
      .collection("people")
      .find()
      .toArray();
    await con.close();
    console.log(typeof data.age);
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/", async (req, res) => {
  try {
    const con = await client.connect();
    const dbRes = await con
      .db("cao-7-pr-mongodb-express")
      .collection("people")
      .insertOne({ name: "Jonas", surname: "Valanciunas", age: 30 });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
