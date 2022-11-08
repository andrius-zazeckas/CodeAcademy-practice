const populateList = async (cars) => {
  const users = await getCars();

  const listElement = document.createElement("ul");

  users.forEach((car) => {
    const liEl = document.createElement("li");
    liEl.textContent = car;
    listElement.append(liEl);
  });

  document.body.append(listElement);
};

const getCars = async () => {
  try {
    const response = await fetch("http://localhost:5001");
    const cars = await response.json();

    return cars;
  } catch (error) {
    console.error(error);
  }
};

populateList();
