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
      loginForm.reset();
      const userData = await response.json();

      localStorage.setItem("token", userData.token);

      document.cookie = `id=${userData.id}`;

      window.location.assign(`./index.html`);
      return;
    }

    if (!response.ok || response.status >= 400) {
      const msg = await response.json();

      return alert(msg.error || msg.statusText);
    }
  } catch (error) {
    alert(error.message);
  }
});
