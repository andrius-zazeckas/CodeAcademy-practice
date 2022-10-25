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

const createSearchForm = () => {
  const searchBox = document.createElement("input");
  searchBox.type = "search";
  searchBox.name = "search";
  searchBox.id = "search";

  const searchButton = document.createElement("button");
  searchButton.type = "submit";
  searchButton.id = "submitButton";
  searchButton.innerText = "Search for name";

  const form = document.createElement("form");
  form.append(searchBox, searchButton);

  document.body.prepend(form);
};

createCheckbox();
createSearchForm();

const addRow = (robot) => {
  const id = document.createElement("td");
  const name = document.createElement("td");
  const surname = document.createElement("td");
  const city = document.createElement("td");
  const favColor = document.createElement("td");
  const rowElement = document.createElement("tr");

  const img = document.createElement("img");
  img.src = robot.image;
  const image = document.createElement("td");
  image.append(img);

  const splitName = robot.name.split(" ");
  const firstName = splitName[0];
  const lastName = splitName[1];

  id.textContent = robot.id;
  name.textContent = firstName;
  surname.textContent = lastName;
  city.textContent = robot.city;
  favColor.textContent = robot.fav_color;

  rowElement.append(id, image, name, surname, city, favColor);
  tableElement.append(rowElement);
};

const populateTable = async () => {
  if (!state.robots) {
    state.robots = await getData();
  } else {
    tableElement.replaceChildren();
  }
  console.log(state.robots);
  state.robots.forEach((robot) => addRow(robot));
};

document.getElementById("isVipCheckbox").addEventListener("change", (event) => {
  state.robots = event.target.checked
    ? state.robots.filter((robot) => robot.vip)
    : state.robots;

  console.log(state);

  populateTable();
});

const getData = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");

    if (response.ok) {
      const robots = await response.json();

      return robots;
    }
  } catch (error) {
    console.error(error);
  }
};

populateTable();

console.log(state);

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const searchString = document.getElementById("search").value.toLowerCase();
//   populateTable(
//     state.robots.filter((robot) =>
//       robot.name.toLowerCase().includes(searchString)
//     )
//   );
// });

//Netinkamas variantas, nes rezultata parodo tik is 3 td elemento, o reikia, kad rezultata parodytu tiek is vardo, tiek is pavardes.

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let input = document.getElementById("search");
  let filter = input.value.toUpperCase();
  let table = document.querySelector("table");
  let td = document.getElementsByTagName("td");
  let tr = table.getElementsByTagName("tr");
  let txtValue = document.querySelector("#search");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
