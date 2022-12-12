const renderUsers = (users) => {
  const sectionContainer = document.body.querySelector("#container");

  sectionContainer.replaceChildren();

  users.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.className = "userContainer";

    const userName = document.createElement("h3");

    const emailEl = document.createElement("p");
    const emailSpanEl = document.createElement("span");
    emailSpanEl.className = "blue-text";

    const membership = document.createElement("p");
    const membershipSpanEl = document.createElement("span");
    membershipSpanEl.className = "blue-text";

    const userIpEl = document.createElement("p");

    const { firstName, lastName, email, membership_name, userIp } = user;

    userName.textContent = `${firstName} ${lastName}`;
    emailEl.textContent = "Email Address: ";
    emailSpanEl.textContent = `${email}`;
    membership.textContent = "Membership: ";
    membershipSpanEl.textContent = `${membership_name}`;
    userIpEl.textContent = `ip: ${userIp}`;

    emailEl.append(emailSpanEl);
    membership.append(membershipSpanEl);

    userContainer.append(userName, emailEl, membership, userIpEl);

    sectionContainer.append(userContainer);
  });
};

export { renderUsers };
