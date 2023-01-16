import express from "express";
import { renderHome } from "./src/modules/renderHome.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", renderHome);

app.listen(PORT, () => {
  console.log(`Server runing on: ${PORT}`);
});
