const addMed = async () => {
  const medNameInputValue = document
    .querySelector("#med-name-input")
    .value.trim();

  const medDescriptionInputValue = document
    .querySelector("#med-description-input")
    .value.trim();

  const newMed = JSON.stringify({
    name: medNameInputValue,
    description: medDescriptionInputValue,
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const response = await fetch("http://localhost:5000/meds", {
      method: "POST",
      headers: myHeaders,
      body: newMed,
    });

    if (response.ok) {
      document.body.querySelector("#med-form").reset();

      alert("Medication was added");
    }

    if (response.status >= 400) {
      const msg = await response.json();

      alert(msg.error);
    }
  } catch (error) {
    alert(error.message);

    if (error.message === "Failed to fetch") {
      alert("No connection with server!");
    }
  }
};

document.body
  .querySelector("#med-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    await addMed();
  });

document.body.querySelector("#cancel").addEventListener("click", () => {
  history.back();
});
