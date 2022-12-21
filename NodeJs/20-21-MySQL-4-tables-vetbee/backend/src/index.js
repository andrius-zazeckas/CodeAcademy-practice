const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const pets = require("./routes/v1/pets");
const meds = require("./routes/v1/medications");
const logs = require("./routes/v1/logs");

require("./config");

const PORT = process.env.serverPort || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/pets", pets.getPets);

app.post("/pets", pets.postPet);

app.delete("/pets/:id", pets.deletePet);

app.delete("/pets/recover/:id", pets.recoverPet);

app.get("/meds", meds.getMeds);

app.post("/meds", meds.postMeds);

app.get("/logs", logs.getLogs);

app.post("/logs", logs.postLogs);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
