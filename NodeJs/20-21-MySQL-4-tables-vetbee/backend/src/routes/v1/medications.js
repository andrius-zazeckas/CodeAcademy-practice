const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

// require("../../config");

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

const getMeds = async (_, res) => {
  const query = "SELECT * FROM medications";

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

const postMeds = async (req, res) => {
  const { name, description } = req.body;

  const sendBadReqResponse = (message) => {
    res
      .status(400)
      .send({
        error: message,
      })
      .end();
  };

  if (!name || !description) {
    return sendBadReqResponse(
      "Please input all data for medications: name and description!"
    );
  }

  const cleanName = mysql.escape(req.body.name?.trim());

  const cleanDescription = mysql.escape(req.body.description?.trim());

  if (typeof cleanName !== "string" || typeof cleanDescription !== "string") {
    return sendBadReqResponse("Please input name and description as a string!");
  }

  const query = `INSERT INTO medications (name, description) VALUES (${cleanName}, ${cleanDescription})`;

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

router.get("/", getMeds);
router.post("/", postMeds);

module.exports = router;
