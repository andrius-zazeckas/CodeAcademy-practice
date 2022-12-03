const newMembership = async () => {
  const membershipNameInputValue = document
    .querySelector("#membership-name-input")
    .value.trim();
  const membershipPriceInputValue = document.querySelector(
    "#membership-price-input"
  ).value;
  const membershipDescriptionInputValue = document.querySelector(
    "#membership-description-input"
  ).value;

  const newMembership = JSON.stringify({
    name: membershipNameInputValue,
    price: +membershipPriceInputValue,
    description: membershipDescriptionInputValue,
  });

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    const request = await fetch("http://localhost:5000/membership", {
      method: "POST",
      headers: myHeaders,
      body: newMembership,
    });
    return request;
  } catch (error) {
    alert(error);
  }
};

document.body
  .querySelector("#membership-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    await newMembership();
  });
