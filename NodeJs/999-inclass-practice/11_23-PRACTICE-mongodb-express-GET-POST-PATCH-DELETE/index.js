const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;

const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());

app.get("/orders", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();
    await connection.close();
    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.get("/order/find/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ _id: ObjectId(id) })
      .toArray();
    await connection.close();
    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.get("/orders/:products", async (req, res) => {
  const { products } = req.params;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ products })
      .toArray();
    await connection.close();
    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.post("/order", async (req, res) => {
  const { products, comments } = req.body;

  const creationDate = new Date().toISOString;
  const plusOneDay = new Date().getTime() + 86400000;
  const completionDate = new Date(plusOneDay);

  if (!products) {
    res.status(400).send("Products was not provided.").end();
    return;
  }

  if (!Array.isArray(products) || typeof comments !== "string") {
    res
      .status(400)
      .send("Products or comments were provided incorectly.")
      .end();
    return;
  }

  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({ products, creationDate, completionDate, comments });
    await con.close();
    return res.send(dbRes).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.post("/orders", async (req, res) => {
  const creationDate = new Date();
  const plusOneDay = new Date().getTime() + 86400000;
  const completionDate = new Date(plusOneDay);

  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .insertMany([
        {
          products: ["shoe", "purse"],
          creationDate,
          completionDate,
          comments: "one",
        },
        {
          products: ["table", "sink"],
          creationDate,
          completionDate,
          comments: "two",
        },
      ]);

    await con.close();
    return res.send(dbRes).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.patch("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { products } = req.body;

  if (!products) {
    res.status(400).send("Products was not provided.").end();
    return;
  }

  if (Array.isArray(products)) {
    res
      .status(400)
      .send("Products or comments were provided incorectly.")
      .end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { products } });

    await con.close();

    res.send(data).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.patch("/orders/:products", async (req, res) => {
  const { products } = req.params;

  if (!products) {
    res.status(400).send("Products was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .updateMany({ products }, { $set: { sold: "bread crumbs" } });

    await con.close();

    res.send(data).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.delete("/order/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("ID was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .deleteOne({ _id: ObjectId(id) });

    await con.close();

    res.send(data).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.delete("/orders/:products", async (req, res) => {
  const { products } = req.params;

  if (!products) {
    res.status(400).send("Products was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .deleteMany({ products });

    await con.close();

    res.send(data).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
