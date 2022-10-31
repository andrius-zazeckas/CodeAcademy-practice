const casual = require("casual");

const randomNumber = Math.round(Math.random() * 10);
const city = casual.city;
const nameSuffix = casual.name_suffix;
const firstName = casual.first_name;
const lastName = casual.last_name;

console.log(`${city} ${randomNumber}`);

console.log(`${nameSuffix} ${firstName} ${lastName}`);
