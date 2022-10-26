import { createElementWithParams } from "./createTable.js";
import { filterRobots } from "./filterRobots.js";

const createVIPCheckbox = (state) => {
  const checkboxElement = createElementWithParams("input", {
    type: "checkbox",
    name: "VIP",
  });

  const checkboxElementLabel = createElementWithParams("label", { for: "VIP" });
  checkboxElementLabel.textContent = "VIP";

  const onVIPCheckboxClick = (event) => {
    const isVIPChecked = event.target.checked;
    state.isVIPChecked = isVIPChecked;
    filterRobots(state);
  };

  checkboxElement.addEventListener("change", onVIPCheckboxClick);

  document.body.prepend(checkboxElement, checkboxElementLabel);
};

export { createVIPCheckbox };
