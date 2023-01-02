import { getMeds } from "./getMeds.js";

const renderMedsNames = async () => {
  const meds = await getMeds();

  const select = document.querySelector("#medication-input");
  select.replaceChildren();

  meds.forEach((med) => {
    const { id, name } = med;

    const optionEl = document.createElement("option");
    optionEl.value = id;
    optionEl.textContent = name;

    select.append(optionEl);
  });
};

await renderMedsNames();

const addPrescription = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const petId = urlParams.get("id");

  const medicationInputValue = document
    .querySelector("#medication-input")
    .value.trim();

  const commentInputValue = document
    .querySelector("#comment-input")
    .value.trim();

  const newPrescription = JSON.stringify({
    medication_id: +medicationInputValue,
    pet_id: +petId,
    comment: commentInputValue,
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const response = await fetch("http://localhost:5000/prescriptions", {
      method: "POST",
      headers: myHeaders,
      body: newPrescription,
    });

    if (response.ok) {
      document.body.querySelector("#prescription-form").reset();

      alert("New prescription was added");
    }

    if (response.status >= 400) {
      const msg = await response.json();

      alert(msg.error);
    }
  } catch (error) {
    alert(error.message);

    if (error.message === "Failed to fetch") {
      alert("No connection with server!");
    }
  }
};

document.body
  .querySelector("#prescription-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    await addPrescription();
  });

document.body.querySelector("#cancel").addEventListener("click", () => {
  history.back();
});
