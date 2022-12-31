const getMeds = async () => {
  try {
    const response = await fetch("http://localhost:5000/meds/");
    const meds = await response.json();

    if (!response.status >= 400) {
      return alert(pets.error);
    }

    return meds;
  } catch (err) {
    console.log(err);

    if (err.message === "Failed to fetch") {
      const sectionContainer = document.body.querySelector("#meds");
      sectionContainer.replaceChildren();

      const noConEL = document.createElement("h2");
      noConEL.textContent = "No connection with server!";

      sectionContainer.append(noConEL);
    }

    throw Error(err);
  }
};

export { getMeds };
