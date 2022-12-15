const express = require("express");
const mysql = require("mysql2/promise");

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
  const limit = +req.query?.limit;

  if (Number.isNaN(limit) || limit < 0 || typeof limit !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper LIMIT in the URL: current LIMIT ${limit} is incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(`SELECT * FROM items LIMIT ${limit}`);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
});

app.post("/items", async (req, res) => {
  const title = mysql.escape(req.query.title.trim());

  if (!title) {
    res
      .status(400)
      .send("Please input item name in URL to create it in a table.");
  }

  const query = `INSERT INTO items (title) VALUES(${title})`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(query);

    await con.end();

    res.send("Data inserted into table").end();
  } catch (err) {
    res.send(err).end();
    return console.err();
  }
});

app.delete("/items/:id", async (req, res) => {
  const id = mysql.escape(req.params.id.trim());
  const cleanId = +id.replaceAll("'", "");

  if (cleanId < 0 || Number.isNaN(cleanId) || typeof cleanId !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${cleanId} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const query = `DELETE FROM items WHERE id = ${cleanId}`;

    await con.execute(query);

    await con.end();

    res.status(200).send("Item was deleted").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
