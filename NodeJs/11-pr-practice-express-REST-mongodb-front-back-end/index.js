const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();

require("dotenv").config();

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;

const DB = process.env.DB;
const SERVICESCOLLECTION = process.env.SERVICESCOLLECTION;
const USERSCOLLECTION = process.env.USERSCOLLECTION;

app.use(cors());
app.use(express.json());

app.get("/memberships", async (_, res) => {
  try {
    const con = await client.connect();
    const memberships = await con
      .db(DB)
      .collection(SERVICESCOLLECTION)
      .find()
      .sort({ price: 1 })
      .toArray();

    await con.close();

    res.send(memberships).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.post("/membership", async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const con = await client.connect();
    const newMembership = await con
      .db(DB)
      .collection(SERVICESCOLLECTION)
      .insertOne({ name, price, description });

    await con.close();
    return res.send(newMembership).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error;
  }
});

app.delete("/membership/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("ID was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const deleteMembership = await con
      .db(DB)
      .collection(SERVICESCOLLECTION)
      .deleteOne({ _id: ObjectId(id) });

    await con.close();

    res.send(deleteMembership).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

// app.get("/users", async (_, res) => {
//   try {
//     const con = await client.connect();
//     const users = await con.db(DB).collection(USERSCOLLECTION).find().toArray();

//     await con.close();

//     res.send(users).end();
//   } catch (err) {
//     res.status(500).send({ err }).end();
//     throw Error(err);
//   }
// });

app.get("/users/:order", async (req, res) => {
  const usersWithMembershipName = [];
  try {
    const con = await client.connect();
    const db = con.db(DB);
    const users = await db
      .collection(USERSCOLLECTION)
      .find()
      .sort({
        lastName: req.params.order?.toLowerCase() === "dsc" ? -1 : 1,
        firstName: req.params.order?.toLowerCase() === "dsc" ? -1 : 1,
      })
      .toArray();

    for (const user of users) {
      const service = await db
        .collection(SERVICESCOLLECTION)
        .findOne({ _id: ObjectId(user.service_id) });

      usersWithMembershipName.push({ ...user, membership_name: service.name });
    }

    await con.close();

    return res.send(usersWithMembershipName).end();
  } catch (err) {
    res.status(500).send(err).end();
  }
});

app.post("/user", async (req, res) => {
  const { firstName, lastName, email, service_id } = req.body;

  const userIp =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  try {
    const con = await client.connect();
    const newUser = await con
      .db(DB)
      .collection(USERSCOLLECTION)
      .insertOne({ firstName, lastName, email, service_id, userIp });

    await con.close();
    return res.send(newUser).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error;
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
