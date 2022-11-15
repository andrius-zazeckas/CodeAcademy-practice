const express = require("express");
const app = express();

app.use(express.json());

const data = require("./data.js");

const PORT = 5000;

app.get("/", (_, res) => {
  res.send(data).end();
});

app.get("/email", (_, res) => {
  const extractValue = (arr, prop) => {
    // extract value from property
    let extractedValue = arr.map((item) => item[prop]);

    return extractedValue;
  };

  // passing an array of objects and property 'a' to extract
  const result = extractValue(data, "email");

  res.send(result).end();
});

app.get("/:car", (req, res) => {
  const { car } = req.params;

  const filterUsersByCarBrand = data.filter(
    (curCar) => curCar.car.toLowerCase() === car.toLowerCase()
  );

  res.send(filterUsersByCarBrand).end();
});

app.get("/id/:id", (req, res) => {
  const id = +req.params.id;

  const user = data.find((curUser) => curUser.id === id);

  res.send(user).end();
});

app.get("/gender/:gender", (req, res) => {
  const { gender } = req.params;

  const doesGenderExists = data.find(
    (curGender) => curGender.gender.toLowerCase() === gender.toLocaleLowerCase()
  );
  if (doesGenderExists) {
    const filterByGender = data.filter(
      (curGender) =>
        curGender.gender.toLowerCase() === gender.toLocaleLowerCase()
    );
    const showFilteredNames = filterByGender.map(
      (curGender) => `${curGender.first_name} ${curGender.last_name}`
    );

    res.send(showFilteredNames).end();
    return;
  }
  res.status(404).send("Gender does not exist").end();
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
