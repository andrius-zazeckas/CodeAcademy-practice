const mysql = require("mysql2/promise");

require("../../config");

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

const getPrescriptions = async (req, res) => {
  const id = +mysql.escape(req.query.id?.trim()).replaceAll("'", " ");

  const query = `SELECT prescriptions.id, prescriptions.medication_id, prescriptions.pet_id, prescriptions.comment AS prescriptions_comment, prescriptions.timestamp AS prescriptions_timestamp, medications.name AS meds_name, medications.description AS meds_description, pets.name AS pet_name, pets.dob, pets.client_email FROM ((prescriptions LEFT JOIN pets ON pets.id = prescriptions.pet_id) LEFT JOIN medications ON prescriptions.medication_id = medications.id) WHERE pets.id = ${id} AND pets.isArchived = 0`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [result] = await con.execute(query);

    if (!result.length) {
      return res.status(404).send({ error: `No records found` }).end();
    }

    await con.end();

    res.status(200).send(result).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};

const postPrescriptions = async (req, res) => {
  const { medication_id, pet_id, comment } = req.body;

  const sendBadReqResponse = (message) => {
    res
      .status(400)
      .send({
        error: message,
      })
      .end();
  };

  if (!medication_id || !pet_id || !comment) {
    return sendBadReqResponse(
      "Please input all data for medications: medications id, pet id, and comment!"
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

  if (
    medication_id < 0 ||
    Number.isNaN(medication_id) ||
    typeof medication_id !== "number"
  ) {
    return res
      .status(400)
      .send({
        error: `Please provide a medications id as a number: current medications id ${medication_id} is incorrect.`,
      })
      .end();
  }

  const cleanMedication_id = +mysql
    .escape(req.body.medication_id)
    .replaceAll("'", "");
  const cleanPet_id = +mysql.escape(req.body.pet_id).replaceAll("'", "");
  const cleanComment = mysql.escape(req.body.comment?.trim());

  if (typeof cleanComment !== "string") {
    return sendBadReqResponse("Please input description as a string!");
  }

  const query = `INSERT INTO prescriptions (medication_id, pet_id, comment) VALUES (${cleanMedication_id}, ${cleanPet_id}, ${cleanComment})`;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [petExists] = await con.execute(
      `SELECT * FROM pets WHERE id = ${cleanPet_id}`
    );

    const [medExists] = await con.execute(
      `SELECT * FROM medications WHERE id = ${cleanMedication_id}`
    );

    if (!petExists.length) {
      return res
        .status(404)
        .send(`Pet with ID - ${cleanPet_id} not found`)
        .end();
    }

    if (!medExists.length) {
      return res
        .status(404)
        .send(`Medication with ID - ${cleanMedication_id} not found`)
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

module.exports = { getPrescriptions, postPrescriptions };
