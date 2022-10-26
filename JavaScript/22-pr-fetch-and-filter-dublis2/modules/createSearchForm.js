import { createElementWithParams, populateTable } from "./createTable.js";
import { filterRobots } from "./filterRobots.js";

const createSearchForm = (state) => {
  const formElement = document.createElement("form");
  const inputElement = createElementWithParams("input", { id: "searchInput" });
  const submitButtonElement = createElementWithParams("button", {
    type: "submit",
    innerText: "Search name",
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchValue = inputElement.value.trim().toLowerCase();
    state.searchValue = searchValue;
    filterRobots(state);
  });

  formElement.append(inputElement, submitButtonElement);
  document.body.prepend(formElement);
};

export { createSearchForm };
