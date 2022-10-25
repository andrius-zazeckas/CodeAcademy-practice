import { createElementWithParams } from "./createTable.js";

const getTableDataElement = (text) => {
  const tdElement = createElementWithParams("td", { textContent: text });

  return tdElement;
};

const addRow = (robot, tbodyElement) => {
  const rowElement = document.createElement("tr");
  const img = document.createElement("img");

  const { id, image, name, city, fav_color } = robot;
  const names = name.split(" ");
  const firstName = names[0].trim();
  const lastName = names[1].trim();

  const idElement = getTableDataElement(id);
  const imageElement = getTableDataElement();
  const firstNameElement = getTableDataElement(firstName);
  const lastNameElement = getTableDataElement(lastName);
  const cityElement = getTableDataElement(city);
  const favColorElement = getTableDataElement(fav_color);

  img.src = image;
  imageElement.append(img);

  rowElement.append(
    idElement,
    imageElement,
    firstNameElement,
    lastNameElement,
    cityElement,
    favColorElement
  );

  tbodyElement.append(rowElement);
};

export { addRow };
