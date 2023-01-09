import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { getUserCount, loginUser, registerUser } from "./routes/v1/auth.js";
import {
  getTutorials,
  getUserTutorials,
  postTutorial,
} from "./routes/v1/tutorials.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/v1/auth/register", registerUser);
app.post("/v1/auth/login", loginUser);
app.get("/v1/auth/users", getUserCount);

app.get("/v1/tutorials", getTutorials);
app.get("/v1/user-tutorials/:id", getUserTutorials);
app.post("/v1/tutorials", postTutorial);

app.get("/", (_, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (_, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
