// ums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

const getProfile = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (response.ok) {
      const profile = await response.json();
      userCard(profile.results[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

const userCard = (user) => {
  const img = document.createElement("img");
  const postContainer = document.createElement("div");
  const headingElement = document.createElement("h3");
  const email = document.createElement("h4");

  img.src = user.picture.large;

  headingElement.textContent = `${user.name.first} ${user.name.last}, ${user.dob.age}`;
  email.textContent = `${user.email}`;

  postContainer.append(img, headingElement, email);

  document.body.append(postContainer);
};
getProfile();
