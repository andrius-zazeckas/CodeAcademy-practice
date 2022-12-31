const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const petId = urlParams.get("id");

const getLog = async () => {
  try {
    const response = await fetch(`http://localhost:5000/logs?id=${petId}`);

    const petLog = await response.json();

    if (response.status >= 400) {
      return petLog.error;
    }

    if (response.ok) {
      return petLog;
    }
  } catch (err) {
    console.log(err);
  }
};

const getPrescriptions = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/prescriptions?id=${petId}`
    );

    const petPrescription = await response.json();

    if (response.status >= 400) {
      return petPrescription.error;
    }

    if (response.ok) {
      return petPrescription;
    }
  } catch (err) {
    console.log(err);
  }
};

const nameEl = document.querySelector("#pet-name");
const logs = await getLog();
const prescriptions = await getPrescriptions();

const logFilter = document.querySelector("#logs-filter");
const prescrFilter = document.querySelector("#prescriptions-filter");

const renderLog = async () => {
  const sectionContainer = document.body.querySelector("#logs");

  const nameEl = document.querySelector("#pet-name");

  const logs = await getLog();

  const logFilter = document.querySelector("#logs-filter");

  if (typeof logs === "string") {
    logFilter.style.display = "none";

    return (nameEl.textContent = logs);
  }

  logs.forEach((log) => {
    const { description, status, name, dob, client_email } = log;

    nameEl.textContent = `${name}: Health Records`;

    const petContainer = document.createElement("div");
    petContainer.className = "log-container";

    const statusEl = document.createElement("h2");
    statusEl.textContent = `Status: ${status}`;

    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;

    const dobEl = document.createElement("p");
    dobEl.textContent = dob.slice(0, 10);

    petContainer.append(statusEl, descriptionEl, dobEl);

    sectionContainer.append(petContainer);
  });
};

const renderPrescription = async () => {
  const sectionContainer = document.body.querySelector("#logs");

  const nameEl = document.querySelector("#pet-name");

  const prescriptions = await getPrescriptions();

  const prescrFilter = document.querySelector("#prescriptions-filter");

  if (typeof prescriptions === "string") {
    prescrFilter.style.display = "none";

    return (nameEl.textContent = prescriptions);
  }

  prescriptions.forEach((prescription) => {
    const {
      pet_name,
      meds_name,
      meds_description,
      prescriptions_comment,
      prescriptions_timestamp,
    } = prescription;

    nameEl.textContent = `${pet_name}: Health Records`;

    const petContainer = document.createElement("div");
    petContainer.className = "prescriptions-container";

    const medsNameEl = document.createElement("h2");
    medsNameEl.textContent = `Medication: ${meds_name}`;

    const medsDescriptionEl = document.createElement("p");
    medsDescriptionEl.textContent = meds_description;

    const prescriptionCommentEl = document.createElement("p");
    prescriptionCommentEl.textContent = prescriptions_comment;

    const prescriptionTimestampEl = document.createElement("p");
    prescriptionTimestampEl.textContent = prescriptions_timestamp.slice(0, 10);

    petContainer.append(
      medsNameEl,
      medsDescriptionEl,
      prescriptionCommentEl,
      prescriptionTimestampEl
    );

    sectionContainer.append(petContainer);
  });
};

const checkLogs = async () => {
  if (typeof logs === "string") {
    logFilter.style.display = "none";

    return (nameEl.textContent = logs);
  } else {
    await renderLog();
    const pet_name = logs[0].name;
    nameEl.textContent = `${pet_name}: Health Records`;
  }
};

console.log(logs);

const checkPrescriptions = async () => {
  if (typeof prescriptions === "string") {
    prescrFilter.style.display = "none";

    return (nameEl.textContent = prescriptions);
  } else {
    await renderPrescription();
    const pet_name = prescriptions[0].pet_name;
    nameEl.textContent = `${pet_name}: Health Records`;
  }
};

await checkPrescriptions();
await checkLogs();

logFilter.addEventListener("click", () => {
  const logContainer = document.querySelectorAll(".log-container");
  const btn = document.querySelector("#logs-filter");
  logContainer.forEach((log) => {
    if (log.style.display === "none") {
      btn.className = "color-button";
      log.style.display = "block";
    } else {
      btn.className = "transparent-button";
      log.style.display = "none";
    }
  });
});

prescrFilter.addEventListener("click", () => {
  const btn = document.querySelector("#prescriptions-filter");
  const prescrContainer = document.querySelectorAll(".prescriptions-container");

  prescrContainer.forEach((prescription) => {
    if (prescription.style.display === "none") {
      btn.className = "color-button";
      prescription.style.display = "block";
    } else {
      btn.className = "transparent-button";
      prescription.style.display = "none";
    }
  });
});
