import express from "express";

const PORT = process.env.serverPort || 5000;

const app = express();

app.use(express.json());

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", renderHome);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
