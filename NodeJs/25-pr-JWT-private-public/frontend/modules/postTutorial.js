const registerForm = document.querySelector("#tutorial-form");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titleInputValue = document.querySelector("#title-input").value.trim();
  const contentInputValue = document
    .querySelector("#content-input")
    .value.trim();

  const user = JSON.stringify({
    title: titleInputValue,
    content: contentInputValue,
  });

  try {
    const response = await fetch("http://localhost:5000/v1/tutorials", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: user,
    });

    if (response.ok) {
      registerForm.reset();

      alert("Tutorial added successfuly");

      window.location.assign(`./user-tutorials.html`);
    }

    if (!response.ok || response.status >= 400) {
      const data = await response.json();

      return alert(data.error || data.statusText);
    }
  } catch (error) {
    console.log(error);
  }
});
