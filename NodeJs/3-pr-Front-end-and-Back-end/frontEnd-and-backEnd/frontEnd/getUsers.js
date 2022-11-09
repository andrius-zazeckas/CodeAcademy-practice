const populateList = async (cars) => {
  const users = await getUsers();

  const listElement = document.createElement("ul");

  users.forEach((user) => {
    const liEl = document.createElement("li");
    liEl.textContent = `${user.name} ${user.surname}`;
    listElement.append(liEl);
  });

  document.body.append(listElement);
};

const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000");
    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};

populateList();
