import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import { getHome } from "./getHome";
import { signIn } from "./signIn";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(cookieParser() as any);

app.get("/home", getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
