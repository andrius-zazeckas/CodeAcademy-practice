import { getRobots } from "./fetch.js";
import { createTable } from "./createTable.js";
import { createVIPCheckbox } from "./createVIPCheckbox.js";
import { createSearchForm } from "./createSearchForm.js";

const robots = await getRobots();

const state = {
  robots: robots,
  fetchedRobots: [...robots], //kita atminties ląstelė, netyčia nepakeis
  isVIPChecked: undefined,
  searchValue: "",
};

createTable(state.robots);

createVIPCheckbox(state);

createSearchForm(state);
