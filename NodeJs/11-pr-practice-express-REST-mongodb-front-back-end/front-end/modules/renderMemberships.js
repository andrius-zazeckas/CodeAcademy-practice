const currency = "$";

const renderMemberships = (memberships) => {
  const sectionContainer = document.body.querySelector("#container");

  sectionContainer.replaceChildren();

  memberships.forEach((membership) => {
    const membershipContainer = document.createElement("div");
    membershipContainer.className = "membershipContainer";

    const membershipTypeContainer = document.createElement("div");
    membershipTypeContainer.className = "membershipTypeContainer";

    const membershipType = document.createElement("h2");
    const descriptionEl = document.createElement("p");

    const deleteMembershipContainer = document.createElement("div");
    deleteMembershipContainer.className = "deleteMembershipContainer";

    const deleteMembershipButton = document.createElement("button");

    const { price, name, description } = membership;

    membershipType.textContent = `${currency}${price} ${name}`;
    descriptionEl.textContent = description;
    deleteMembershipButton.textContent = "Delete";

    membershipTypeContainer.append(membershipType, descriptionEl);

    deleteMembershipContainer.append(deleteMembershipButton);

    membershipContainer.append(
      membershipTypeContainer,
      deleteMembershipContainer
    );
    sectionContainer.append(membershipContainer);
  });
};

export { renderMemberships };
