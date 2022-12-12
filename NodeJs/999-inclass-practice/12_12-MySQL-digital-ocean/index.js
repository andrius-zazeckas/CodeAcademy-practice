const express = require("express");
const mysql = require("mysql2/promise");

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

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    console.log(`Success: ${con}`);

    await con.end();

    res.send("connected").end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.post("/table", async (req, res) => {
  const name = req.body?.name.trim();
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id))`
    );

    await con.end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
  res.send("Table was created").end();
});

app.listen(PORT, () => {
  console.log(`${PORT} server is runing`);
});
