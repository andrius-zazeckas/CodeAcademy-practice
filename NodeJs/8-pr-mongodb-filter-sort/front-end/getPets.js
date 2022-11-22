const populateTable = async () => {
  const pets = await getPets();

  const tableEl = document.querySelector("#output");
  const tableBodyEl = document.createElement("tbody");

  pets.forEach((pet) => {
    const tableRowEl = document.createElement("tr");
    const firstNameEl = document.createElement("td");
    const typeEl = document.createElement("td");
    const ageEl = document.createElement("td");

    const { firstName, type, age } = pet;

    firstNameEl.textContent = firstName;
    typeEl.textContent = type;
    ageEl.textContent = age;

    tableRowEl.append(firstNameEl, typeEl, ageEl);
    tableBodyEl.append(tableRowEl);
  });

  tableEl.append(tableBodyEl);
};

const getPets = async () => {
  try {
    const response = await fetch("http://localhost:5000/pets");
    const pets = await response.json();

    return pets;
  } catch (error) {
    console.log(error);
  }
};

await populateTable();
