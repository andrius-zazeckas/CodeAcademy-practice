const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInputValue = document.querySelector("#email-input").value.trim();
  const pswInputValue = document.querySelector("#password-input").value.trim();

  const user = JSON.stringify({
    email: emailInputValue,
    password: pswInputValue,
  });

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    const response = await fetch("http://localhost:5000/v1/auth/login", {
      method: "POST",
      headers: myHeaders,
      body: user,
    });

    if (response.ok) {
      document.body.querySelector("#login-form").reset();
      const data = await response.json();

      localStorage.setItem("token", data.token);

      console.log("Logged in succesfully");
      console.log(data);

      window.location.assign(`./content.html`);
    }

    if (response.status >= 400) {
      const msg = await response.json();

      alert(msg.error);
    }
  } catch (error) {
    alert(error.message);
  }
});
