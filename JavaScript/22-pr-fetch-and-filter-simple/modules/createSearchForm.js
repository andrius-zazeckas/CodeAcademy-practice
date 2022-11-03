import { createElementWithParams, populateTable } from "./createTable.js";

const createSearchForm = (robots) => {
  const formElement = document.createElement("form");
  const inputElement = createElementWithParams("input", { id: "searchInput" });
  const submitButtonElement = createElementWithParams("button", {
    type: "submit",
    innerText: "Search name",
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchValue = inputElement.value.trim().toLowerCase();

    const tbodyElement = document.querySelector("tbody");

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchValue)
    );

    tbodyElement.replaceChildren();

    populateTable(filteredRobots, tbodyElement);
  });

  formElement.append(inputElement, submitButtonElement);
  document.body.prepend(formElement);
};

export { createSearchForm };
