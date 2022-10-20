// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

//     Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
//     Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
//     Pridėkite prie lentelės (tarp id ir name) nuotrauką.
//     Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
//     Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

const state = {};

const tableElement = document.body.querySelector("table>tbody");
const checkboxElement = document.createElement("input");
checkboxElement.type = "checkbox";
checkboxElement.name = "checkbox";
checkboxElement.id = "isVipCheckbox";

const checkboxLabel = document.createElement("label");
checkboxLabel.for = "checkbox";
checkboxLabel.textContent = "VIP guests";

document.body.prepend(checkboxElement, checkboxLabel);

document.getElementById("isVipCheckbox").addEventListener("change", (event) => {
  populateTable(
    event.target.checked
      ? state.guest.filter((guest) => guest.vip)
      : state.guest
  );
});

const addRow = (person) => {
  const id = document.createElement("td");
  const name = document.createElement("td");
  const surname = document.createElement("td");
  const city = document.createElement("td");
  const fav_color = document.createElement("td");
  const rowElement = document.createElement("tr");

  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = person.image;
  imgContainer.append(img);

  const splitName = person.name.split(" ");
  const firstName = splitName[0];
  const lastName = splitName[1];

  id.textContent = person.id;
  name.textContent = firstName;
  surname.textContent = lastName;
  city.textContent = person.city;
  fav_color.textContent = person.fav_color;

  rowElement.append(id, imgContainer, name, surname, city, fav_color);
  tableElement.append(rowElement);
};

const populateTable = async () => {
  const person = await getData();

  person.forEach((guest) => addRow(guest));
};

const getData = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    if (response.ok) {
      const post = await response.json();
      return post;
      filterVIPguests(post);
    }
  } catch (error) {
    console.error(error);
  }
};

populateTable();
