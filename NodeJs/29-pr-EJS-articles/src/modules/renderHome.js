import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";

export const renderHome = async (req, res) => {
  const query = "SELECT * FROM articles";

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [articles] = await con.execute(query);

    await con.end();

    res.render("index", {
      title: "code academy",
      pageTitle: "News",
      articles,
    });
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};
