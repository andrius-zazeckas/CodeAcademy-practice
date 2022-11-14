const addUser = async () => {
  const nameInputValue = document.querySelector("#nameInput").value.trim();
  const surnameInputValue = document
    .querySelector("#surnameInput")
    .value.trim();

  const newuser = JSON.stringify({
    name: nameInputValue,
    surname: surnameInputValue,
  });

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const request = await fetch("http://localhost:5000", {
      method: "POST",
      headers: myHeaders,
      body: newuser,
    });
  } catch (error) {
    alert(error);
  }
};

document.body.querySelector("button").addEventListener("click", addUser);
