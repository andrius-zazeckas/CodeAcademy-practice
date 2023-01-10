import mysql from "mysql2/promise";
import { MYSQL_CONFIG } from "../../config";

export const getUsers = () => async (_, res) => {
  const query = "SELECT * FROM users";

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
