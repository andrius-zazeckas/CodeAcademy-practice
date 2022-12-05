import { renderUsers } from "./renderUsers.js";

let order = "asc";

const getUsers = async () => {
  try {
    const response = await fetch(`http://localhost:5000/users/${order}`);
    const users = await response.json();

    renderUsers(users);
  } catch (err) {
    console.log(err);
  }
};

await getUsers();

document.querySelector("#sortingEl").addEventListener("click", async (e) => {
  const text = e.target.textContent;

  const sortingEl = document.querySelector("#sortingEl");

  const iEl = document.createElement("i");
  iEl.className = "fa fa-sort";

  if (text.includes("ASC")) {
    e.target.textContent = text.replace("ASC", "DSC");
    sortingEl.append(iEl);

    order = "dsc";
  } else {
    e.target.textContent = text.replace("DSC", "ASC");
    sortingEl.append(iEl);

    order = "asc";
  }
  await getUsers();
});
