const getPets = async () => {
  try {
    const response = await fetch("http://localhost:5000/v1/pets/");
    const pets = await response.json();

    if (!response.ok || response.status >= 400) {
      return alert(pets.error || pets.statusText);
    }

    return pets;
  } catch (err) {
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
