// import { renderMemberships } from "./renderMemberships.js";

const getMemberships = async () => {
  try {
    const response = await fetch("http://localhost:5000/memberships/");
    const memberships = await response.json();

    return memberships;
  } catch (err) {
    throw Error({ err });
  }
};

// await getMemberships();

export { getMemberships };
