import { getToDos } from "./getToDos.js";

const tableElement = document.querySelector("table#toDos");

const addRow = (newItem) => {
  const titleColumn = document.createElement("td");
  const completedColumn = document.createElement("td");
  const rowElement = document.createElement("tr");
  const completedCheckbox = document.createElement("input");

  titleColumn.textContent = newItem.title;
  completedCheckbox.type = "checkbox";
  completedCheckbox.checked = newItem.completed;

  completedColumn.append(completedCheckbox);
  rowElement.append(titleColumn, completedColumn);
  tableElement.append(rowElement);
};

const populateTable = async () => {
  const toDos = await getToDos();

  toDos.forEach((toDoItem) => addRow(toDoItem));
};

export { populateTable };
