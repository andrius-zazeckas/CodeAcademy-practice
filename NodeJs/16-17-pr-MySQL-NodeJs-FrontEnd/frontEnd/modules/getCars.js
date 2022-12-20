const getCars = async () => {
  try {
    const response = await fetch("http://localhost:5000/cars/");
    const cars = await response.json();

    if (!response.status >= 400) {
      const msg = await response.json();

      alert(msg.error);
    }

    return cars;
  } catch (err) {
    console.log(err);

    if (err.message === "Failed to fetch") {
      const sectionContainer = document.body.querySelector("#cars");
      sectionContainer.replaceChildren();

      const noConEL = document.createElement("h2");
      noConEL.textContent = "No connection with server!";

      sectionContainer.append(noConEL);
    }

    throw Error(err);
  }
};

export { getCars };
