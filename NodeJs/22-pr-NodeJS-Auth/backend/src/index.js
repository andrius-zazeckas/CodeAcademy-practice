import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import auth from "./routes/v1/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1/auth", auth);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
