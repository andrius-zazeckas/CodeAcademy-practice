const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;

const DB = process.env.DB;
const CATEGORIESCOLLECTION = process.env.CATEGORIESCOLLECTION;
const PRODUCTSCOLLECTION = process.env.PRODUCTSCOLLECTION;

app.use(express.json());

app.get("/categories", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(CATEGORIESCOLLECTION)
      .find()
      .toArray();

    await con.close();

    res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.get("/products", async (_, res) => {
  try {
    const con = await client.connect();
    const products = await con
      .db(DB)
      .collection(PRODUCTSCOLLECTION)
      .find()
      .toArray();

    await con.close();

    res.send(products).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.get("/categoryvalue", async (req, res) => {
  const pipeline = [
    {
      $match: {
        // categoryId: "63864c171ef919a403c1faf7",
      },
    },
    {
      $group: {
        _id: "$categoryId",
        totalPrice: { $sum: "$price" },
      },
    },
    {
      $sort: {
        totalPrice: -1,
      },
    },
  ];

  try {
    const docs = [];
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(PRODUCTSCOLLECTION);

    const uniqueProducts = await collection.distinct("product");

    const productsCount = await collection.count({ product: "iPhone" });

    const aggregationCursor = collection.aggregate(pipeline);

    for await (const doc of aggregationCursor) {
      docs.push(doc);
    }

    await con.close();

    res.send({ uniqueProducts, productsCount, docs }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.get("/twocollections", async (req, res) => {
  try {
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(CATEGORIESCOLLECTION);

    const join = collection
      .aggregate([
        {
          $lookup: {
            from: PRODUCTSCOLLECTION,
            localField: "_id",
            foreignField: "categoryId",
            as: "products",
          },
        },
      ])
      .toArray();

    await con.close();

    res.send(join).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, async () => {
  console.log(`server is running on ${PORT}`);
});
