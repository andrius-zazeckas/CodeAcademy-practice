import { getCars } from "./getCars.js";

const renderCars = async () => {
  const cars = await getCars();
  //   console.log(isResponseOk);

  //   const resp = cars.status;
  //   console.log(resp);

  const sectionContainer = document.body.querySelector("#cars");
  sectionContainer.replaceChildren();

  if (cars.length === 0) {
    const noDataEl = document.createElement("h2");
    noDataEl.textContent = "No data in database";

    sectionContainer.append(noDataEl);
  }

  cars.forEach((car) => {
    const { id, title, image, price, numberplates } = car;

    const carContainer = document.createElement("div");
    carContainer.className = "carContainer";

    const carTitleContainer = document.createElement("div");
    carTitleContainer.className = "carTitleContainer";

    const numberplatesEl = document.createElement("h2");
    const carModelEl = document.createElement("p");

    numberplatesEl.textContent = `${numberplates.slice(
      0,
      3
    )} ${numberplates.slice(3)}`;
    carModelEl.textContent = title;

    const priceEl = document.createElement("h4");
    priceEl.textContent = `${price}€`;

    const carImageContainer = document.createElement("div");
    carImageContainer.className = "carImageContainer";

    const carImageEl = document.createElement("img");
    carImageEl.src = image;

    const deleteCarContainer = document.createElement("div");
    deleteCarContainer.className = "deleteCarContainer";

    const deleteCarButton = document.createElement("button");
    deleteCarButton.id = id;
    deleteCarButton.className = "delete-button";
    deleteCarButton.textContent = "DELETE";

    carTitleContainer.append(numberplatesEl, carModelEl, priceEl);
    carImageContainer.append(carImageEl);
    deleteCarContainer.append(deleteCarButton);

    carContainer.append(
      carTitleContainer,
      carImageContainer,
      deleteCarContainer
    );

    sectionContainer.append(carContainer);

    const deleteCar = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/cars/${deleteCarButton.id}`,
          {
            method: "DELETE",
          }
        );

        const isPostDeleted = response.ok;

        if (isPostDeleted) {
          alert("Car deleted succesfully");
          //   await getCars();
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    };

    deleteCarButton.addEventListener("click", deleteCar);
  });
};

await renderCars();

export { renderCars };
