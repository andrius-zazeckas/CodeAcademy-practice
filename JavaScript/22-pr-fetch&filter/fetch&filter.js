// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

//     Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
//     Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
//     Pridėkite prie lentelės (tarp id ir name) nuotrauką.
//     Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
//     Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

const state = {};
const tableElement = document.body.querySelector("table>tbody");

const createCheckbox = () => {
  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.name = "checkbox";
  checkboxElement.id = "isVipCheckbox";

  const checkboxLabel = document.createElement("label");
  checkboxLabel.for = "checkbox";
  checkboxLabel.textContent = "VIP";

  document.body.prepend(checkboxElement, checkboxLabel);
};

createCheckbox();

const addRow = (person) => {
  const id = document.createElement("td");
  const name = document.createElement("td");
  const surname = document.createElement("td");
  const city = document.createElement("td");
  const fav_color = document.createElement("td");
  const rowElement = document.createElement("tr");

  const img = document.createElement("img");
  img.src = person.image;
  const image = document.createElement("td");
  image.append(img);

  const splitName = person.name.split(" ");
  const firstName = splitName[0];
  const lastName = splitName[1];

  id.textContent = person.id;
  name.textContent = firstName;
  surname.textContent = lastName;
  city.textContent = person.city;
  fav_color.textContent = person.fav_color;

  rowElement.append(id, image, name, surname, city, fav_color);
  tableElement.append(rowElement);
};

const populateTable = async () => {
  const persons = await getData();

  persons.forEach((person) => addRow(person));
};

document.getElementById("isVipCheckbox").addEventListener("change", (event) => {
  populateTable(
    event.target.checked
      ? state.post.filter((person) => person.vip)
      : state.post
  );
});

const getData = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");

    if (response.ok) {
      state.post = await response.json();
      return state.post;
    }
  } catch (error) {
    console.error(error);
  }
};

populateTable();
