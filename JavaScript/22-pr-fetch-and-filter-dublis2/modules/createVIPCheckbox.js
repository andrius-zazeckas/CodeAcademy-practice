import { createElementWithParams, populateTable } from "./createTable.js";

const createVIPCheckbox = (robots) => {
  const checkboxElement = createElementWithParams("input", {
    type: "checkbox",
    label: "VIP",
  });

  const onVIPCheckboxClick = (event) => {
    const isChecked = event.target.checked;
    const tbodyElement = document.querySelector("tbody");

    tbodyElement.replaceChildren();

    if (!isChecked) {
      // rodyk visus robotus
      populateTable(robots, tbodyElement);

      return;
    }
    // rodyk VIP`inius
    const VIPRobots = robots.filter((robot) => robot.vip);

    populateTable(VIPRobots, tbodyElement);
  };

  checkboxElement.addEventListener("change", onVIPCheckboxClick);

  document.body.prepend(checkboxElement);
};

export { createVIPCheckbox };
