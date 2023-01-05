import { getPets } from "./getPets.js";

const renderPets = async () => {
  const pets = await getPets();
  console.log(pets);
  const sectionContainer = document.body.querySelector("#pets");
  sectionContainer.replaceChildren();

  if (pets.length === 0) {
    const noDataEl = document.createElement("h2");
    noDataEl.textContent = "No data in database";

    sectionContainer.append(noDataEl);
  }

  pets.forEach((pet) => {
    const { id, name, dob, client_email, isArchived } = pet;

    const petContainer = document.createElement("div");
    petContainer.className = "petContainer";

    const petTitleContainer = document.createElement("div");
    petTitleContainer.className = "petTitleContainer";

    const nameEl = document.createElement("h2");
    const dobEl = document.createElement("p");
    const client_emailEl = document.createElement("p");

    nameEl.textContent = name;
    dobEl.textContent = dob.slice(0, 10);
    client_emailEl.textContent = client_email;

    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    const deletePetButton = document.createElement("button");
    deletePetButton.id = id;
    deletePetButton.className = "delete-button transparent-button";
    deletePetButton.textContent = "DELETE";

    const viewLogButton = document.createElement("button");
    viewLogButton.id = id;
    viewLogButton.className = "view-log-button color-button";
    viewLogButton.textContent = "VIEW LOG";

    petTitleContainer.append(nameEl, dobEl, client_emailEl);

    btnContainer.append(viewLogButton, deletePetButton);

    petContainer.append(
      petTitleContainer,

      btnContainer
    );

    sectionContainer.append(petContainer);

    const viewPetLog = () => {
      //   try {
      //     const response = await fetch(
      //       `http://localhost:5000/logs?id=${viewLogButton.id}`
      //     );

      //     const petLog = await response.json();

      //     if (response.status >= 400) {
      //       alert(petLog.error);
      //     }

      //     if (response.ok) {
      // window.open(`./log.html?id=${viewLogButton.id}`, "_self");
      window.location.assign(`./log.html?id=${viewLogButton.id}`);

      //   return petLog;
      //     }
      //   } catch (err) {
      //     console.log(err);
      //   }
    };

    const deletePet = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/v1/pets/${deletePetButton.id}`,
          {
            method: "DELETE",
          }
        );

        const isPostDeleted = response.ok;

        if (isPostDeleted) {
          alert("pet deleted succesfully");
          //   await getpets();
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    };

    viewLogButton.addEventListener("click", viewPetLog);

    deletePetButton.addEventListener("click", deletePet);
  });
};

await renderPets();

export { renderPets };
