import { populateTable } from "./populateTable.js";

const ageEl = document.querySelector("#ageSort");

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
