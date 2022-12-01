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

app.get("/users", async (req, res) => {
  const { firstName, hasOrdered } = req.body;

  if (!firstName || typeof firstName !== "string") {
    res
      .status(400)
      .send("First name was not provided or is not a string")
      .end();
    return;
  }

  if (!hasOrdered && typeof hasOrdered !== "boolean") {
    res.status(400).send("Has ordered is provided incorrectly").end();
    return;
  }

  const pipeline = [
    {
      $match: {
        // name: { $regex: name, $options: "i" }, //paieska be case sensitive, nes options yra i "insensitive"
        hasOrdered,
      },
    },
    {
      $group: {
        _id: "$firstName",
        totalOrders: { $count: {} },
      },
    },
    {
      $sort: {
        totalOrders: -1,
      },
    },
  ];

  try {
    const docs = [];
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(DBCOLLECTION);

    const uniqueNames = await collection.distinct("firstName");

    const nameCount = await collection.count({
      firstName,
    });

    const aggregationCursor = collection.aggregate(pipeline);

    for await (const doc of aggregationCursor) {
      docs.push(doc);
    }

    await con.close();

    res.send({ uniqueNames, nameCount, docs }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, async () => {
  console.log(`server is running on ${PORT}`);
});
