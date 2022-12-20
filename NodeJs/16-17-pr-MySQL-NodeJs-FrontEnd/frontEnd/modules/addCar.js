const addCar = async () => {
  const carModelInputValue = document
    .querySelector("#car-model-input")
    .value.trim();

  const numberplatesInputValue = document
    .querySelector("#numberplates-input")
    .value.trim();

  const priceInputValue = document.querySelector("#price-input").value.trim();

  const imageInputValue = document.querySelector("#image-input").value.trim();

  const newCar = JSON.stringify({
    title: carModelInputValue,
    image: imageInputValue,
    price: priceInputValue,
    numberplates: numberplatesInputValue,
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const response = await fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: myHeaders,
      body: newCar,
    });

    if (response.ok) {
      document.body.querySelector("#car-form").reset();

      alert("New car was created");
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
  .querySelector("#car-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    await addCar();
  });
