const headingElement = document.body.querySelector("#seoHeading");
const firstName = prompt("Your name");
const lastNameInput = document.body.querySelector("#lastNameInput");
const userDataForm = document.body.querySelector("#userDataForm");

headingElement.textContent = firstName;

lastNameInput.addEventListener("input", (e) => {
  //"e" funkcija yra anonimine
  const lastName = e.target.value.trim();
  console.log({ lastName });
  headingElement.textContent = `${firstName} ${lastName}`;
});

const doCalculations = (event, data) => {
  event.preventDefault();
  console.log({ data });
  console.log({ event });
};

lastNameInput.addEventListener("keydown", function () {
  console.log("Pavardes reiksme pakeista");
});

userDataForm.addEventListener("submit", (event) => {
  event.preventDefault(); //tipiskai addEventListener arba onsubmit atributas buna. Abieju nerekomenduotina, nes per daug identiskos logikos bus, pavyzdziui: event.preventDefault()

  const favouriteNumberInput = document.body.querySelector("#favouriteNumber");

  console.log(
    `vartojo megstamiausias skaicius: ${+favouriteNumberInput.value}`
  );
});

const onSubmit = (event) => {
  event.preventDefault();

  alert("Successfull");
};
