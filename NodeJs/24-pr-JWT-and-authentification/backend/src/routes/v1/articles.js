import mysql from "mysql2/promise";
import { MYSQL_CONFIG } from "../../config.js";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config.js";

export const getArticles = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  let payload = null;

  if (!token) {
    return res.status(401).send({ error: "User unauthorised" }).end();
  }

  try {
    payload = jwt.verify(token, jwtSecret);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
    return res.status(400).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [result] = await con.execute("SELECT * FROM articles");

    await con.end();

    return res.status(200).send(result).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
};
