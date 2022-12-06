const getMemberships = async () => {
  try {
    const response = await fetch("http://localhost:5000/memberships/");
    const memberships = await response.json();

    return memberships;
  } catch (err) {
    throw Error({ err });
  }
};

// todo isvengti getmemberships su state is robots

const renderMembershipNames = async () => {
  const memberships = await getMemberships();

  const select = document.querySelector("#user-membership-input");
  select.replaceChildren();

  memberships.forEach((membership) => {
    const { _id, name } = membership;

    const optionEl = document.createElement("option");
    optionEl.value = _id;
    optionEl.textContent = name;

    select.append(optionEl);
  });
};

await renderMembershipNames();

const newUser = async () => {
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

    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: myHeaders,
      body: newUser,
    });
    if (response.ok) {
      document.body.querySelector("#user-form").reset();

      // const successMessageEl = document.querySelector("#success-message");
      // // successMessageEl.style.padding = "20px";
      // successMessageEl.textContent = "User created";

      // const successMessageContainer = document.querySelector(
      //   "#success-message-container"
      // );
      // successMessageContainer.append(successMessageEl);

      // setTimeout(() => {
      //   successMessageContainer.replaceChildren();
      // }, 3000);

      alert("User was created");
    }
    return response;
  } catch (error) {
    alert(error);
  }
};

document.body
  .querySelector("#user-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    await newUser();
  });
