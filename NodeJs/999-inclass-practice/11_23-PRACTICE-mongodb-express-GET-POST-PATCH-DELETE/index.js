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

app.get("/orders", async (req, res) => {
  const { deliveryType } = req.body;

  // if prideti

  try {
    const connection = await client.connect();
    const ordersCount = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .count({ deliveryType });
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();

    await connection.close();

    res.send({ data, ordersCount }).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.get("/order/:id", async (req, res) => {
  const { id } = req.params;
  // todo: if
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

app.get("/orders/:product", async (req, res) => {
  const { product } = req.params;
  //todo if

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ products: { $regex: product } })
      .toArray();

    await connection.close();

    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.post("/order", async (req, res) => {
  const { products, comments, deliveryType } = req.body;

  const creationDate = new Date().toISOString();
  const plusOneDay = new Date().getTime() + 86_400_000;
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
    const dbRes = await con.db(DB).collection(DBCOLLECTION).insertOne({
      products,
      creationDate,
      completionDate,
      comments,
      deliveryType,
    });

    await con.close();

    return res.send(dbRes).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.post("/orders", async (req, res) => {
  const { postOrders } = req.body;

  if (!Array.isArray(postOrders)) {
    return res.status(400).send({ message: "orders is not an array" });
  }

  // todo: Loretos pvz

  const creationDate = new Date();
  const plusOneDay = new Date().getTime() + 86_400_000;
  const completionDate = new Date(plusOneDay);

  try {
    const con = await client.connect();
    const newOrders = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .insertMany([
        {
          products,
          creationDate,
          completionDate,
          comments,
        },
        {
          products,
          creationDate,
          completionDate,
          comments: "two",
        },
      ]);

    await con.close();

    res.send(newOrders).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.patch("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { products } = req.body;

  const userIp =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  console.log(userIp);

  if (!products) {
    res.status(400).send("Products was not provided.").end();
    return;
  }

  if (!Array.isArray(products)) {
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
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { products, updatedBy: userIp } }
      );

    await con.close();

    res.send(data).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.patch("/orders/:products", async (req, res) => {
  const { products } = req.params;
  const { isSold } = req.body;

  if (!products) {
    res.status(400).send("Products was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .updateMany({ products }, { $set: { isSold } });

    await con.close();

    res.send(data).end();
  } catch (error) {
    res.send({ error }).end();
    throw Error(error);
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
    res.send({ error }).end();
    throw Error(error);
  }
});

app.delete("/orders/:products", async (req, res) => {
  const { products } = req.params;

  console.log(products, typeof products);

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
    res.send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
