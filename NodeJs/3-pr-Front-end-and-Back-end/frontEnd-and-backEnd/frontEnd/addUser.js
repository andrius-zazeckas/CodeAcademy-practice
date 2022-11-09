const addUser = async () => {
  const nameInputValue = document.querySelector("#nameInput").value;
  const surnameInputValue = document.querySelector("#surnameInput").value;

  const newuser = JSON.stringify({
    name: nameInputValue,
    surname: surnameInputValue,
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const request = await fetch("http://localhost:5000", {
    method: "POST",
    headers: myHeaders,
    body: newuser,
  });

  const response = await request.json();

  console.log(response);
};

document.body.querySelector("button").addEventListener("click", addUser);
