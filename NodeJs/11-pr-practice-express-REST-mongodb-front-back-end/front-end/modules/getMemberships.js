import { renderMemberships } from "./renderMemberships.js";

const getMemberships = async () => {
  try {
    const response = await fetch("http://localhost:5000/memberships/");
    const memberhips = await response.json();

    renderMemberships(memberhips);
  } catch (err) {
    console.log(err);
  }
};

await getMemberships();

export { getMemberships };
