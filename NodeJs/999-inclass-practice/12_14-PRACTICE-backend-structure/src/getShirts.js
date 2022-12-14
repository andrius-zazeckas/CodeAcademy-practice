const express = require("express");
const mysql = require("mysql2/promise");

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

const getShirts = () => {
  app.get("/shirts", async (req, res) => {
    const size = req.query.size;
    const limit = req.query.limit;

    //  /shirts?size=s&&limit=2

    const query =
      size && limit
        ? `SELECT * FROM shirts WHERE size='${size}' ORDER BY price LIMIT ${limit}`
        : `SELECT * FROM shirts`;

    try {
      const con = await mysql.createConnection(MYSQL_CONFIG);

      const result = await con.execute(query);

      await con.end();

      res.send(result[0]).end();
    } catch (err) {
      res.send(err).end();
      return console.error();
    }
  });
};

app.listen(PORT, () => {
  console.log(`${PORT} server is runing`);
});

module.exports = { getShirts };
