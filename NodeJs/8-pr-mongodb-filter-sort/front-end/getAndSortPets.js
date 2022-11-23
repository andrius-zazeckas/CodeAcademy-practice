import { populateTable } from "./populateTable.js";

const ageEl = document.querySelector("#ageSort");
const dogButton = document.querySelector("#dogButton");
const catButton = document.querySelector("#catButton");
const bunnyButton = document.querySelector("#bunnyButton");

const getPets = async (order) => {
  try {
    const response = await fetch(`http://localhost:5000/pets/order/${order}`);
    const pets = await response.json();

    populateTable(pets);
    return pets;
  } catch (error) {
    console.log(error);
  }
};

await getPets();

ageEl.addEventListener("click", async (e) => {
  const text = e.target.textContent;

  if (text.includes("ASC")) {
    e.target.textContent = text.replace("ASC", "DSC");
    const pets = await getPets("dsc");
    populateTable(pets);
  } else {
    e.target.textContent = text.replace("DSC", "ASC");
    const pets = await getPets("asc");
    populateTable(pets);
  }
});

const filterType = async (type) => {
  try {
    const response = await fetch(
      `http://localhost:5000/pets/type/?type=${type}`,
    );
    const pets = await response.json();

    populateTable(pets);
    return pets;
  } catch (error) {
    console.log(error);
  }
};

dogButton.addEventListener("click", async () => {
  dogButton.classList.toggle("selected");

  if (dogButton.className === "") {
    const pets = await filterType("dog&?type=cat");
    populateTable(pets);
  } else {
    const pets = await getPets();
    populateTable(pets);
  }
});
