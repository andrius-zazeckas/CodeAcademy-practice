const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const petId = urlParams.get("id");

const getLog = async () => {
  try {
    const response = await fetch(`http://localhost:5000/v1/logs?id=${petId}`);

    const petLog = await response.json();

    if (!response.ok || response.status >= 400) {
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
      `http://localhost:5000/v1/prescriptions?id=${petId}`
    );

    const petPrescription = await response.json();

    if (!response.ok || response.status >= 400) {
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

document.querySelector("#add-log").addEventListener("click", () => {
  window.open(`./add-log.html?id=${petId}`, "_self");
});

document.querySelector("#add-prescription").addEventListener("click", () => {
  window.open(`./add-prescription.html?id=${petId}`, "_self");
});

const renderLog = async () => {
  if (!logs) {
    return;
  }

  const sectionContainer = document.body.querySelector("#logs");

  const nameEl = document.querySelector("#pet-name");

  if (typeof logs === "string") {
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

  if (typeof prescriptions === "string") {
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
    return (logFilter.style.display = "none");
  } else {
    await renderLog();
    const pet_name = logs[0].name;
    nameEl.textContent = `${pet_name}: Health Records`;
  }
};

const checkPrescriptions = async () => {
  if (typeof prescriptions === "string") {
    return (prescrFilter.style.display = "none");
  } else {
    await renderPrescription();
    const pet_name = prescriptions[0].pet_name;
    nameEl.textContent = `${pet_name}: Health Records`;
  }
};

const noRec = () => {
  if (typeof logs === "string" && typeof prescriptions === "string") {
    return (
      (nameEl.textContent = prescriptions),
      (document.querySelector("#filter-container").style.display = "none")
    );
  }
};

await checkPrescriptions();
await checkLogs();
noRec();

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
