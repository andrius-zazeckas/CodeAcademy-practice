import { renderMemberships } from "./renderMemberships.js";

const getMemberships = async () => {
  try {
    const response = await fetch("http://localhost:5000/memberships/");
    const memberships = await response.json();

    renderMemberships(memberships);
  } catch (err) {
    console.log(err);
  }
};

await getMemberships();

export { getMemberships };
