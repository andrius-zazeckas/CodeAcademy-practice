import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";

export const renderHome = async (req, res) => {
  const query = "SELECT * FROM users";

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [users] = await con.execute(query);

    // const users = JSON.stringify(result);

    // console.log(result[0].name);

    await con.end();

    // const users = {
    //   name: "And",
    //   age: 35,
    //   email: "as@as.com",
    // };

    res.render("index", {
      title: "code academy",
      pageName: "Users",
      users,
    });
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
};
