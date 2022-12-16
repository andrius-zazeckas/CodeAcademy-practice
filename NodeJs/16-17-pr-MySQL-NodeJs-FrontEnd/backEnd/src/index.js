const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const { query } = require("express");

require("./config");

const PORT = process.env.serverPort || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

app.post("/table", async (_, res) => {
  const name = "cars";

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `CREATE table ${name}(id int AUTO_INCREMENT, PRIMARY KEY(id), title varchar(20), image varchar(2000), price DECIMAL(10,2), numberplates varchar(6))`
    );

    await con.end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
  res.send("Table was created").end();
});

app.get("/cars", async (req, res) => {
  try {
    const query = "SELECT * FROM cars";

    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(query);

    await con.end();

    res.status(200).send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
});

app.get("/cars/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");

  if (!id || id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const query = `SELECT * FROM cars WHERE id = ${id}`;

    // const idExistsQuery = `SELECT EXISTS (SELECT id FROM cars WHERE id = ${id}) AS output`;
    // const idExists = await con.execute(idExistsQuery);

    // const findId = idExists[0].map((found) => found.output);
    // console.log({ findId });

    // if (findId === 0) {
    //   // return res.status(500).send(`ID - ${id} not found`).end();
    //   console.log("no");
    // }

    const result = await con.execute(query);

    await con.end();

    if (result[0].length === 0) {
      return res.status(500).send(`ID - ${id} not found`).end();
    }

    res.status(200).send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.post("/cars", async (req, res) => {
  const title = mysql.escape(req.body.title.trim());
  const image = mysql.escape(req.body.image.trim());
  const price = +mysql.escape(req.body.price).replaceAll("'", "");
  const numberplates = mysql.escape(req.body.numberplates.trim());

  if (!title || !image || !price || !numberplates) {
    return res.status(400).send({
      error:
        "Please input all data for car: title, image URL, price, numberplates!",
    });
  }

  if (
    typeof title !== "string" ||
    typeof image !== "string" ||
    typeof numberplates !== "string"
  ) {
    return res.status(400).send({
      error: "Please input title, image and numberplates as a string!",
    });
  }

  if (numberplates.length < 8) {
    return res.status(400).send({
      error:
        "Please input numberplates correctly. Numberplates must be 6 symbols!",
    });
  }

  if (Number.isNaN(price) || typeof price !== "number") {
    return res.status(400).send({
      error: `Price should be only numbers: current price ${price} is incorrect.`,
    });
  }

  try {
    const query = `INSERT INTO cars (title, image, price, numberplates) VALUES (${title}, ${image}, ${price}, ${numberplates})`;

    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(query);

    await con.end();

    res.status(200).send("Provided data was inserted into table");
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
});

app.delete("/cars/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");

  if (!id || id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const query = `DELETE FROM cars WHERE id = ${id}`;
    const idExistsQuery = `SELECT * FROM cars WHERE id = ${id}`;

    const result = await con.execute(idExistsQuery);

    if (result[0].length === 0) {
      return res.status(500).send(`ID - ${id} not found`).end();
    }

    await con.execute(query);

    await con.end();

    res.status(200).send("Item was deleted").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
