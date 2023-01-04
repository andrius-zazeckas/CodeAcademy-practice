import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import auth from "./routes/v1/auth.js";
import content from "./routes/v1/content.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1/auth", auth);
app.use("/v1/content", content);

app.get("/", (req, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
