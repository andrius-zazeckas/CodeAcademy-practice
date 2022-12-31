const getPets = async () => {
  try {
    const response = await fetch("http://localhost:5000/pets/");
    const pets = await response.json();

    if (!response.status >= 400) {
      return alert(pets.error);
    }

    return pets;
  } catch (err) {
    console.log(err);

    if (err.message === "Failed to fetch") {
      const sectionContainer = document.body.querySelector("#pets");
      sectionContainer.replaceChildren();

      const noConEL = document.createElement("h2");
      noConEL.textContent = "No connection with server!";

      sectionContainer.append(noConEL);
    }

    throw Error(err);
  }
};

export { getPets };
