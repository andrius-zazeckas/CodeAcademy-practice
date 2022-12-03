const getMembershipValues = async () => {
  const values = ["trial", "silver", "bronze", "gold", "platinum"];

  const select = document.querySelector("#user-membership-input");

  for (const val of values) {
    const option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.append(option);
  }
};

await getMembershipValues();

const newMembership = async () => {
  const firstNameInputValue = document
    .querySelector("#user-first-name-input")
    .value.trim();
  const emailInputValue = document
    .querySelector("#user-email-input")
    .value.trim();
  const lastNameInputValue = document
    .querySelector("#user-last-name-input")
    .value.trim();

  const membershipInputValue = document
    .querySelector("#user-membership-input")
    .value.trim();

  const newUser = JSON.stringify({
    firstName: firstNameInputValue,
    lastName: lastNameInputValue,
    email: emailInputValue,
    service_id: membershipInputValue,
  });

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    const request = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: myHeaders,
      body: newUser,
    });
    return request;
  } catch (error) {
    alert(error);
  }
};

document.body
  .querySelector("#user-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    await newMembership();
  });
