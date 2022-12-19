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

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    const response = await fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: myHeaders,
      body: newCar,
    });

    if (response.ok) {
      document.body.querySelector("#car-form").reset();

      // const successMessageEl = document.querySelector("#success-message");
      // // successMessageEl.style.padding = "20px";
      // successMessageEl.textContent = "User created";

      // const successMessageContainer = document.querySelector(
      //   "#success-message-container"
      // );
      // successMessageContainer.append(successMessageEl);

      // setTimeout(() => {
      //   successMessageContainer.replaceChildren();
      // }, 3000);

      alert("New car was created");
    }

    const msg = await response.json();

    if (!response.ok) {
      alert(msg.error);
    }

    return response;
  } catch (error) {
    if (error.message === "Failed to fetch") {
      alert("No connection with server!");
    }
    console.log(error);
  }
};

document.body
  .querySelector("#car-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    await addCar();
  });
