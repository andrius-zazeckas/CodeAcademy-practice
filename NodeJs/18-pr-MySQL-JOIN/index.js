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

app.post("/author", async (req, res) => {
  const firstName = mysql.escape(req.body.firstName.trim());
  const lastName = mysql.escape(req.body.lastName.trim());

  if (!firstName || !lastName) {
    return res.status(400).send({
      error:
        "Please input all data for car: title, image URL, price, numberplates!",
    });
  }

  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return res.status(400).send({
      error: "Please input title, image and numberplates as a string!",
    });
  }

  try {
    const query = `INSERT INTO authors (firstName, lastName) VALUES (${firstName}, ${lastName})`;

    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(query);

    await con.end();

    res.status(200).send("Provided data was inserted into table");
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.post("/book", async (req, res) => {
  const author_id = +mysql.escape(req.body.author_id).replaceAll("'", "");
  const title = mysql.escape(req.body.title.trim());
  const year = +mysql.escape(req.body.year).replaceAll("'", "");

  try {
    const query = `INSERT INTO books (author_id, title, year) VALUES (${author_id}, ${title}, ${year})`;

    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(query);

    await con.end();

    res.status(200).send("Provided data was inserted into table");
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

//Pasirašome SQL JOIN, kuris atvaizduotų lentelę visų knygų su jų autoriais (books.id, authors.name, authors.surname, books.title, books.year).

app.get("/books", async (req, res) => {
  try {
    const query =
      "SELECT books.id, authors.firstName, authors.lastName, books.title, books.year FROM books LEFT JOIN authors ON authors.id = books.author_id";

    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = (await con.execute(query))[0];

    await con.end();

    res.status(200).send(result).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

//Parašome SQL, kuris atvaizduotų visus autorius ir kiek jie knygų turi (t.y. author.id, author.name, author.surname, count(by books.author_id))

app.get("/books-count", async (req, res) => {
  try {
    const query =
      "SELECT COUNT (books.id) AS bookCount, authors.firstName, authors.lastName FROM books INNER JOIN authors ON authors.id = books.author_id GROUP BY firstName, lastName";

    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = (await con.execute(query))[0];

    await con.end();

    res.status(200).send(result).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
