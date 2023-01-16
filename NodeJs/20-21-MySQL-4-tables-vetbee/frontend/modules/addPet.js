const addPet = async () => {
  const petNameInputValue = document
    .querySelector("#pet-name-input")
    .value.trim();

  const petDobInputValue = document
    .querySelector("#pet-dob-input")
    .value.trim();

  const clientEmailInputValue = document
    .querySelector("#client-email-input")
    .value.trim();

  const newPet = JSON.stringify({
    name: petNameInputValue,
    dob: petDobInputValue,
    client_email: clientEmailInputValue,
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const response = await fetch("http://localhost:5000/v1/pets", {
      method: "POST",
      headers: myHeaders,
      body: newPet,
    });

    if (response.ok) {
      document.body.querySelector("#pet-form").reset();

      alert("A pet was added");
      window.history.back();
    }

    if (!response.ok || response.status >= 400) {
      const data = await response.json();

      alert(data.error || data.statusText);
    }
  } catch (error) {
    alert(error.message);

    if (error.message === "Failed to fetch") {
      alert("No connection with server!");
    }
  }
};

document.body
  .querySelector("#pet-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    await addPet();
  });

document.body.querySelector("#cancel").addEventListener("click", () => {
  window.history.back();
});
