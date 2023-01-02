const express = require("express");
const cors = require("cors");

const auth = require("./auth");

require("./config");

const PORT = process.env.serverPort || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", auth);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
