import { getMemberships } from "./getMemberships.js";

const currency = "$";

const renderMemberships = async () => {
  const memberships = await getMemberships();

  const sectionContainer = document.body.querySelector("#container");

  sectionContainer.replaceChildren();

  memberships.forEach((membership) => {
    const { _id, price, name, description } = membership;

    const membershipContainer = document.createElement("div");
    membershipContainer.className = "membershipContainer";

    const membershipTypeContainer = document.createElement("div");
    membershipTypeContainer.className = "membershipTypeContainer";

    const membershipType = document.createElement("h2");
    const descriptionEl = document.createElement("p");

    const deleteMembershipContainer = document.createElement("div");
    deleteMembershipContainer.className = "deleteMembershipContainer";

    membershipType.textContent = `${currency}${price} ${name}`;
    descriptionEl.textContent = description;

    const deleteMembershipButton = document.createElement("button");
    deleteMembershipButton.id = _id;
    deleteMembershipButton.className = "delete-button";
    deleteMembershipButton.innerHTML = '<i class="fa fa-trash"> </i>';

    membershipTypeContainer.append(membershipType, descriptionEl);

    deleteMembershipContainer.append(deleteMembershipButton);

    membershipContainer.append(
      membershipTypeContainer,
      deleteMembershipContainer
    );

    sectionContainer.append(membershipContainer);

    const deleteMembership = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/membership/${deleteMembershipButton.id}`,
          {
            method: "DELETE",
          }
        );

        const isPostDeleted = response.ok;

        if (isPostDeleted) {
          await getMemberships();
        }
      } catch (err) {
        console.log(err);
      }
    };

    deleteMembershipButton.addEventListener("click", deleteMembership);
  });
};

await renderMemberships();

// export { renderMemberships };
