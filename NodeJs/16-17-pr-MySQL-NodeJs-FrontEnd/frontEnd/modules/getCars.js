const getCars = async () => {
  try {
    const response = await fetch("http://localhost:5000/cars/");
    const cars = await response.json();

    return cars;
  } catch (err) {
    if (err.message === "Failed to fetch") {
      const sectionContainer = document.body.querySelector("#cars");
      sectionContainer.replaceChildren();

      const noConEL = document.createElement("h2");
      noConEL.textContent = "No connection with server!";

      sectionContainer.append(noConEL);

      // alert("No connection with server!");
    }

    throw Error(err);
  }
};

export { getCars };
