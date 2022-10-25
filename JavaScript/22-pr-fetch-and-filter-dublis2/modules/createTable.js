import { addRow } from "./addRow.js";

const createElementWithParams = (tagName, params) => {
  const element = document.createElement(tagName);

  Object.assign(element, params);

  return element;
};

const populateTable = (robots, tbodyElement) => {
  robots.forEach((robot) => {
    addRow(robot, tbodyElement);
  });
};

const createTable = (robots) => {
  const tableElement = document.createElement("table");
  const theadElement = document.createElement("thead");

  const tbodyElement = document.createElement("tbody");

  const idHeader = createElementWithParams("th", { innerText: "ID" });
  const imgHeader = createElementWithParams("th", { innerText: "Image" });
  const firstNameHeader = createElementWithParams("th", {
    innerText: "First name",
  });
  const lastNameHeader = createElementWithParams("th", {
    innerText: "Last name",
  });
  const cityHeader = createElementWithParams("th", { innerText: "City" });
  const favColorHeader = createElementWithParams("th", {
    innerText: "Favorite color",
  });

  theadElement.append(
    idHeader,
    imgHeader,
    firstNameHeader,
    lastNameHeader,
    cityHeader,
    favColorHeader
  );

  populateTable(robots, tbodyElement);

  tableElement.append(theadElement, tbodyElement);
  document.body.append(tableElement);
};

export { createTable, createElementWithParams, populateTable };
