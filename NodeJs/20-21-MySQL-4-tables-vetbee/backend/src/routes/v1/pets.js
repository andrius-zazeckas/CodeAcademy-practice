const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

require("../../config");

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

const getPets = async (_, res) => {
  const query = "SELECT * FROM pets WHERE isArchived = 0";

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [result] = await con.execute(query);

    await con.end();

    res.status(200).send(result).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};

const postPet = async (req, res) => {
  const { name, dob, client_email } = req.body;

  const sendBadReqResponse = (message) => {
    res
      .status(400)
      .send({
        error: message,
      })
      .end();
  };

  if (!name || !dob || !client_email) {
    return sendBadReqResponse(
      "Please input all data for pet: name, date of birth, client email!"
    );
  }

  const cleanName = mysql.escape(req.body.name?.trim());
  const cleanDob = mysql.escape(req.body.dob?.trim()).replaceAll("'", "");
  const cleanClient_email = mysql.escape(req.body.client_email?.trim());

  const dateIsValid = (dateStr) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateStr.match(regex) === null) {
      return false;
    }

    const date = new Date(dateStr);

    const timestamp = date.getTime();

    if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
      return false;
    }

    return date.toISOString().startsWith(dateStr);
  };

  if (
    typeof cleanName !== "string" ||
    !dateIsValid(cleanDob) ||
    typeof cleanClient_email !== "string"
  ) {
    return sendBadReqResponse(
      "Please input name, client email as a string, date of birth as a date!"
    );
  }

  const query = `INSERT INTO pets (name, dob, client_email) VALUES (${cleanName}, '${cleanDob}', ${cleanClient_email})`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(query);

    await con.end();

    res.status(200).send("Provided data was inserted into table");
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};

const deletePet = async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");
  const query = `UPDATE pets SET isArchived = 1 WHERE id = ${id}`;

  if (id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a id as a number in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [idExists] = await con.execute(
      `SELECT * FROM pets WHERE isArchived = 0 AND id = ${id}`
    );

    if (!idExists.length) {
      return res.status(404).send(`ID - ${id} not found`).end();
    }

    await con.execute(query);

    await con.end();

    res.status(202).send("Pet was deleted").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};

const recoverPet = async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");
  const query = `UPDATE pets SET isArchived = 0 WHERE id = ${id}`;

  if (id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a id as a number in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [idExists] = await con.execute(
      `SELECT * FROM pets WHERE isArchived = 1 AND id = ${id}`
    );

    if (!idExists.length) {
      return res.status(404).send(`ID - ${id} not found`).end();
    }

    await con.execute(query);

    await con.end();

    res.status(202).send("Pet was recovered from archive").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};

router.get("/", getPets);

router.delete("/:id", deletePet);

router.delete("/recover/:id", recoverPet);

router.post("/", postPet);

module.exports = router;
