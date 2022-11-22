const express = require("express");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
app.use(express.json());

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;
const DB = process.env.DB;

app.post("/collection", async (req, res) => {
  const { name } = req.body;

  try {
    const con = await client.connect();
    const database = await con.db(DB);
    await database.createCollection(name);

    await con.close();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`Server is on ${PORT}`));
