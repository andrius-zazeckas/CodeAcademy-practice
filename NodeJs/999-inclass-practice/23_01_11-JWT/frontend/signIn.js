const signInForm = document.querySelector("#sign-in-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userInputValue = document.querySelector("#userName").value.trim();
  const passwordInputValue = document.querySelector("#password").value.trim();

  try {
    const response = await fetch("http://localhost:5000/sign-in", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userName: userInputValue,
        password: passwordInputValue,
      }),
    });

    const userData = await response.json();

    if (!response.ok || response.status >= 400) {
      return alert(userData?.error);
    }

    if (response.ok) {
      localStorage.setItem("accessToken", userData.accessToken);
    }
  } catch (error) {
    console.log(error);
  }
});
