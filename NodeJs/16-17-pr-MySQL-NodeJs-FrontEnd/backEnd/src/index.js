const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

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
    return console.error(err);
  }
  res.send("Table was created").end();
});

app.get("/cars", async (_, res) => {
  const query = "SELECT * FROM cars";

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = (await con.execute(query))[0];

    await con.end();

    res.status(200).send(result).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.get("/cars/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");
  const query = `SELECT * FROM cars WHERE id = ${id}`;

  if (id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = (await con.execute(query))[0];

    if (!result.length) {
      return res.status(404).send(`ID - ${id} not found`).end();
    }

    await con.end();

    res.status(200).send(result).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.post("/cars", async (req, res) => {
  const { title, image, price, numberplates } = req.body;

  const sendBadReqResponse = (message) => {
    res
      .status(400)
      .send({
        error: message,
      })
      .end();
  };

  if (!title || !image || !price || !numberplates) {
    return sendBadReqResponse(
      "Please input all data for car: title, image URL, price, numberplates!"
    );
  }

  const cleanTitle = mysql.escape(req.body.title?.trim());
  const cleanImage = mysql.escape(req.body.image?.trim());
  const cleanPrice = +mysql.escape(req.body.price).replaceAll("'", "");
  const cleanNumberplates = mysql.escape(
    req.body.numberplates.toUpperCase().trim()
  );

  if (
    typeof cleanTitle !== "string" ||
    typeof cleanImage !== "string" ||
    typeof cleanNumberplates !== "string"
  ) {
    return sendBadReqResponse(
      "Please input title, image and numberplates as a string!"
    );
  }

  if (cleanNumberplates.length !== 8) {
    return sendBadReqResponse(
      "Please input numberplates correctly. Numberplates must be 6 symbols!"
    );
  }

  if (Number.isNaN(cleanPrice) || typeof cleanPrice !== "number") {
    return sendBadReqResponse(
      `Price should be only numbers: current price ${cleanPrice} is incorrect.`
    );
  }

  const query = `INSERT INTO cars (title, image, price, numberplates) VALUES (${cleanTitle}, ${cleanImage}, ${cleanPrice}, ${cleanNumberplates})`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(query);

    await con.end();

    res.status(200).send("Provided data was inserted into table");
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.delete("/cars/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");
  const query = `DELETE FROM cars WHERE id = ${id}`;

  if (id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const idExists = (
      await con.execute(`SELECT * FROM cars WHERE id = ${id}`)
    )[0];

    if (!idExists.length) {
      return res.status(404).send(`ID - ${id} not found`).end();
    }

    await con.execute(query);

    await con.end();

    res.status(202).send("Item was deleted").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
