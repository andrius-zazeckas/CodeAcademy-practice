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
    const response = await fetch("http://localhost:5000/pets", {
      method: "POST",
      headers: myHeaders,
      body: newPet,
    });

    if (response.ok) {
      document.body.querySelector("#pet-form").reset();

      alert("A pet was added");
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
  .querySelector("#pet-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    await addPet();
  });
