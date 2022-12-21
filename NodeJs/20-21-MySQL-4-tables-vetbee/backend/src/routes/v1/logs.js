const mysql = require("mysql2/promise");

require("../../config");

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

const getLogs = async (req, res) => {
  const pet = +mysql.escape(req.query.pet?.trim()).replaceAll("'", " ");

  const query = `SELECT logs.id, logs.pet_id, logs.description, logs.status, pets.name, pets.dob, pets.client_email FROM logs LEFT JOIN pets ON pets.id = logs.pet_id WHERE pets.id = ${pet} AND pets.isArchived = 0`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [result] = await con.execute(query);

    if (!result.length) {
      return res.status(404).send(`Pet not found`).end();
    }

    await con.end();

    res.status(200).send(result).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};

const postLogs = async (req, res) => {
  const { pet_id, description, status } = req.body;

  const sendBadReqResponse = (message) => {
    res
      .status(400)
      .send({
        error: message,
      })
      .end();
  };

  if (!pet_id || !description || !status) {
    return sendBadReqResponse(
      "Please input all data for medications: name and description!"
    );
  }

  if (pet_id < 0 || Number.isNaN(pet_id) || typeof pet_id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a pet id as a number: current pet id ${pet_id} is incorrect.`,
      })
      .end();
  }

  const cleanPet_id = +mysql.escape(req.body.pet_id).replaceAll("'", "");
  const cleanDescription = mysql.escape(req.body.description?.trim());
  const cleanStatus = mysql.escape(req.body.status?.trim());

  if (typeof cleanDescription !== "string" || typeof cleanStatus !== "string") {
    return sendBadReqResponse("Please input name and description as a string!");
  }

  const query = `INSERT INTO logs (pet_id, description, status) VALUES (${cleanPet_id}, ${cleanDescription}, ${cleanStatus})`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [petExists] = await con.execute(
      `SELECT * FROM pets WHERE id = ${cleanPet_id}`
    );

    if (!petExists.length) {
      return res
        .status(404)
        .send(`Pet with ID - ${cleanPet_id} not found`)
        .end();
    }

    await con.execute(query);

    await con.end();

    res.status(200).send("Provided data was inserted into table");
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};

module.exports = { getLogs, postLogs };
