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
      `CREATE table ${name}(id int AUTO_INCREMENT, PRIMARY KEY (id), brand varchar(10), model varchar(20), size varchar(3), price DECIMAL (4, 2))`
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
  const size = req.body.size.toUpperCase().trim();
  const price = req.body.price;

  if (!brand || !model || !size || !price) {
    res.status(400).send("Please input all data: brand, model, size, price!");
  }

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

app.get("/shirts", async (req, res) => {
  const size = req.query.size.toUpperCase();
  const limit = req.query.limit;

  //  /shirts?size=s&&limit=2

  const sizes = ["XS", "S", "M", "L", "XL"];

  if (!sizes.includes(size)) {
    res.status(400).send("Size must be one of these: XS, S, M, L, XL").end();
  }

  if (limit < 3 || limit > 20) {
    res.status(400).send("LIMIT is set incorectly").end();
  }

  const query =
    size && limit
      ? `SELECT * FROM shirts WHERE size='${size}' ORDER BY price ASC LIMIT ${limit}`
      : `SELECT * FROM shirts`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(query);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.get("*", (_, res) => {
  res.status(404).send("404! This is an invalid URL.");
});

app.listen(PORT, () => {
  console.log(`${PORT} server is runing`);
});
