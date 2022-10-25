import { createElementWithParams, populateTable } from "./createTable.js";

const createVIPCheckbox = (robots) => {
  const checkboxElement = createElementWithParams("input", {
    type: "checkbox",
    name: "VIP",
  });

  const checkboxElementLabel = createElementWithParams("label", { for: "VIP" });
  checkboxElementLabel.textContent = "VIP";

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

  document.body.prepend(checkboxElement, checkboxElementLabel);
};

export { createVIPCheckbox };
