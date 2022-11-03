import { getRobots } from "./fetch.js";
import { createTable } from "./createTable.js";
import { createVIPCheckbox } from "./createVIPCheckbox.js";
import { createSearchForm } from "./createSearchForm.js";

const robots = await getRobots();

createTable(robots);

createVIPCheckbox(robots);

createSearchForm(robots);
