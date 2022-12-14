const express = require("express");
const mysql = require("mysql2");

require("dotenv").config();

const PORT = process.env.serverPort || 5000;
const app = express();

app.use(express.json());

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

app.post("/table", async (_, res) => {
  const name = "items";

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `CREATE table ${name}(id int AUTO_INCREMENT, PRIMARY KEY(id), title varchar(20))`
    );

    await con.end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
  res.send("Table was created").end();
});

app.get("/items", async (req, res) => {
  const limit = req.query?.limit;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(`SELECT * FROM items LIMIT ${limit}`);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
