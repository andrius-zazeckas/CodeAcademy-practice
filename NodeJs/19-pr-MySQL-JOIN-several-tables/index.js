const express = require("express");
const mysql = require("mysql2/promise");

require("./config");

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

app.get("/products", async (_, res) => {
  const query = "SELECT * FROM products";

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

app.post("/products", async (req, res) => {
  const { title, image, price } = req.body;

  const sendBadReqResponse = (message) => {
    res
      .status(400)
      .send({
        error: message,
      })
      .end();
  };

  if (!title || !image || !price) {
    return sendBadReqResponse(
      "Please input all data for car: title, image URL, price, numberplates!"
    );
  }

  const cleanTitle = mysql.escape(req.body.title?.trim());
  const cleanImage = mysql.escape(req.body.image?.trim());
  const cleanPrice = +mysql.escape(req.body.price).replaceAll("'", "");

  if (typeof cleanTitle !== "string" || typeof cleanImage !== "string") {
    return sendBadReqResponse("Please input title, image as a string!");
  }

  if (Number.isNaN(cleanPrice) || typeof cleanPrice !== "number") {
    return sendBadReqResponse(
      `Price should be only numbers: current price ${cleanPrice} is incorrect.`
    );
  }

  const query = `INSERT INTO products (title, image, price) VALUES (${cleanTitle}, ${cleanImage}, ${cleanPrice})`;

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

app.get("/products/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");
  const query = `SELECT * FROM products WHERE id = ${id}`;

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

app.get("/orders/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");
  const query = `SELECT orders.id, orders.customer_name, customer_email, products.title, products.image, products.price FROM orders INNER JOIN products ON products.id = orders.product_id WHERE orders.id = ${id}`;

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

app.delete("/products/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");
  const password = req.body.password;
  const query = `DELETE FROM products WHERE id = ${id}`;

  const sendBadReqResponse = (message) => {
    res
      .status(400)
      .send({
        error: message,
      })
      .end();
  };

  if (id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return sendBadReqResponse(
      `Please provide a proper id in the URL: current id ${id} incorrect.`
    );
  }

  if (!password) {
    return sendBadReqResponse(`Please provide a password.`);
  }

  const psw = 123;

  const cleanPassword = mysql.escape(req.body.password).replaceAll("'", "");

  console.log(cleanPassword);

  if (cleanPassword != psw) {
    return sendBadReqResponse(`Password is incorrect, terminating command.`);
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const idExists = (
      await con.execute(`SELECT * FROM products WHERE id = ${id}`)
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

//Prie orders lentelės pridėti IP adresą
//  const userIp =
// req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

//Prie orders lentelės pridėti timestamp (pagal serverio laiką, ne vartotojo - t.y. ne front-end'inį, jis gali būti pakeistas).
//ALTER TABLE orders
//ADD time_stamp DATETIME NOT NULL DEFAULT (current_timestamp());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
