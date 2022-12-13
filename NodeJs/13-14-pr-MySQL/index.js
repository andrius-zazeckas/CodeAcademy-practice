const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const PORT = process.env.serverPort || 5000;
const app = express();

require("dotenv").config();

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
  //   ssl: process.env.sslmode,
};

app.use(express.json());

app.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    console.log(`Success: ${con}`);

    await con.end();

    res.send("Connected to database").end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.post("/table", async (req, res) => {
  //   const name = req.body?.name.trim();
  const name = "shirts";
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `CREATE table ${name}(id int AUTO_INCREMENT, PRIMARY KEY (id), brand TEXT, model TEXT, size TEXT, price DECIMAL (10, 2))`
    );

    await con.end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
  res.send("Table was created").end();
});

app.post("/shirts", async (req, res) => {
  const brand = req.body.brand.trim();
  const model = req.body.model.trim();
  const size = req.body.size.trim();
  const price = req.body.price;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `INSERT INTO shirts (brand, model, size, price) VALUES ('${brand}', '${model}', '${size}', '${price}')`
    );

    await con.end();
    res.status(201).send("Data inserted into table");
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.get("/shirts/:size", async (req, res) => {
  const size = req.params.size;
  const limit = req.query.limit;

  //   const isSuchSize = async () => {
  //     const con = await mysql.createConnection(MYSQL_CONFIG);

  //     const result = await con.execute(
  //       `SELECT count(*) FROM shirts WHERE size='${size}'`
  //     );

  //     res.send(result[0]).end();

  //     await con.end();

  //   };

  //   if (!isSuchSize === "0") {
  //     return res.status(404).send("Student does not exist").end();
  //   }

  //   if (!req.params.size) {
  //     const con = await mysql.createConnection(MYSQL_CONFIG);

  //     const result = await con.execute(
  //       "SELECT * FROM defaultdb.shirts ORDER BY price LIMIT 10"
  //     );

  //     await con.end();
  //     return res.send(result[0]).end();
  //   }

  let query = `SELECT * FROM defaultdb.shirts WHERE size='${size}' ORDER BY price LIMIT ${limit}`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(query);

    res.send(result[0]).end();

    await con.end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

// app.get("*", (_, res) => {
//   res.status(404).send("404! This is an invalid URL.");
// });

app.listen(PORT, () => {
  console.log(`${PORT} server is runing`);
});
