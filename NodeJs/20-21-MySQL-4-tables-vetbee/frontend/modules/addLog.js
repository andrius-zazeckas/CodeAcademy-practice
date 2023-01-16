const addLog = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const petId = urlParams.get("id");

  const logStatusInputValue = document
    .querySelector("#log-status-input")
    .value.trim();

  const logDescriptionInputValue = document
    .querySelector("#log-description-input")
    .value.trim();

  const newLog = JSON.stringify({
    pet_id: +petId,
    description: logDescriptionInputValue,
    status: logStatusInputValue,
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const response = await fetch("http://localhost:5000/logs", {
      method: "POST",
      headers: myHeaders,
      body: newLog,
    });

    if (response.ok) {
      document.body.querySelector("#log-form").reset();

      alert("New log was added");
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
  .querySelector("#log-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    await addLog();
  });

document.body.querySelector("#cancel").addEventListener("click", () => {
  window.history.back();
});
