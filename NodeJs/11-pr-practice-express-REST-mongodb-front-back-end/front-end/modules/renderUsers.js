const renderUsers = (users) => {
  const sectionContainer = document.body.querySelector("#container");

  sectionContainer.replaceChildren();

  users.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.className = "userContainer";

    const userName = document.createElement("h2");
    const emailEl = document.createElement("p");
    const membership = document.createElement("p");
    const userIpEl = document.createElement("p");

    const { firstName, lastName, email, membership_name, userIp } = user;

    userName.textContent = `${firstName} ${lastName}`;
    emailEl.textContent = `Email Address: ${email}`;
    membership.textContent = `Membership: ${membership_name}`;
    userIpEl.textContent = `ip: ${userIp}`;

    userContainer.append(userName, emailEl, membership, userIpEl);

    sectionContainer.append(userContainer);
  });
};

export { renderUsers };
