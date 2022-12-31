import { getMeds } from "./getMeds.js";

const renderMeds = async () => {
  const meds = await getMeds();

  const sectionContainer = document.body.querySelector("#meds");
  sectionContainer.replaceChildren();

  if (meds.length === 0) {
    const noDataEl = document.createElement("h2");
    noDataEl.textContent = "No data in database";

    sectionContainer.append(noDataEl);
  }

  const medContainer = document.createElement("div");
  medContainer.id = "meds-container";

  const titleEl = document.createElement("h1");
  titleEl.id = "title";
  titleEl.textContent = "Medications:";

  const medTableEl = document.createElement("table");
  medTableEl.id = "med-table";

  const tbodyEl = document.createElement("tbody");
  tbodyEl.id = "tbody";

  const tableRowEl = document.createElement("tr");
  const thIdEl = document.createElement("th");
  const thNameEl = document.createElement("th");
  const thDescriptionEl = document.createElement("th");

  thIdEl.textContent = "ID";
  thNameEl.textContent = "Medication name";
  thDescriptionEl.textContent = "Description";

  tableRowEl.append(thIdEl, thNameEl, thDescriptionEl);
  tbodyEl.append(tableRowEl);
  medTableEl.append(tbodyEl);

  medContainer.append(titleEl, medTableEl);

  meds.forEach((med) => {
    const { id, name, description } = med;

    const rowEl = document.createElement("tr");

    const idEl = document.createElement("td");
    const nameEl = document.createElement("td");
    const descriptionEl = document.createElement("td");

    idEl.textContent = id;
    nameEl.textContent = name;
    descriptionEl.textContent = description;

    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    rowEl.append(idEl, nameEl, descriptionEl);
    tbodyEl.append(rowEl);
  });
  sectionContainer.append(medContainer);
};

await renderMeds();
