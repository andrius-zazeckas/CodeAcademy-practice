import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { loginUser, registerUser } from "./routes/v1/auth.js";
import { getArticles } from "./routes/v1/articles.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/v1/auth/register", registerUser);
app.post("/v1/auth/login", loginUser);

app.get("/v1/articles", getArticles);

app.get("/", (_, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (_, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
