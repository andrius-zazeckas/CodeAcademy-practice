import express, { response } from "express";
import mysql from "mysql2/promise";
import { MYSQL_CONFIG } from "./config";
import { PORT } from "./config";

import axios from "axios";

// import { getUsers } from "./routes/v1/users";

const app = express();

app.use(express.json());

// app.get("/users", getUsers);

app.get("/users", (_, res) => {
  axios
    .get("https://randomuser.me/api/")
    .then(async (usersResponse) => {
      const user = usersResponse.data.results[0].name.first;

      try {
        const con = await mysql.createConnection(MYSQL_CONFIG);
        const query = "SELECT * FROM users";
        const newUser = `INSERT INTO users (user) VALUES ('${user}')`;

        await con.execute(newUser);
        const [result] = await con.execute(query);
        await con.end();

        res.status(200).send(result).end();
      } catch (err) {
        res.status(500).send(err).end();
        return console.error(err);
      }
    })
    .catch((err) => {
      console.error(err);
      return res.send(err).end();
    });
});

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
