// 1. Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

const form = document.body.querySelector("form");
const cookieResult = document.body.querySelector("#nameResult");

// cookieResult = document.cookie;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = e.target.elements.name.value;

  document.cookie = `name=${nameValue}`;

  cookieResult.textContent = nameValue;
  form.classList.add("hidden");
  output.classList.remove("hidden");

  //   if (document.cookie !== "") {
  //     cookieResult.textContent = nameValue;
  //   } else if (document.cookie === "") {
  //     document.cookie = "";
  //   }
});

console.log(document.cookie);

document.body.querySelector("#erase").addEventListener("click", (event) => {
  document.cookie = "";
  document.body.querySelector("#nameResult").innerText = "";
  output.classList.add("hidden");
  form.classList.remove("hidden");
});

// CAO atsakymas
// Šiame atsakyme nenaudojam Cookie Store API.
// Funckijos paimtos iš https://www.w3schools.com/js/js_cookies.asp

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// const form = document.querySelector("form");
// const output = document.getElementById("output");
// const name = getCookie("name");

// // Jeigu puslapis būtų perkraunamas
// if (getCookie(name)) {
//   form.classList.add("hidden");
//   output.classList.remove("hidden");
// } else {
//   form.classList.remove("hidden");
//   output.classList.add("hidden");
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.querySelector('input[name="name"]').value;
//   setCookie("name", name, 1);
//   document.getElementById("name").innerText = name;
//   form.classList.add("hidden");
//   output.classList.remove("hidden");
// });

// document.getElementById("erase").addEventListener("click", (event) => {
//   document.cookie = "";
//   document.getElementById("name").innerText = "";
//   output.classList.add("hidden");
//   form.classList.remove("hidden");
// });

// 2.Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.

const userProfile = {
  firstName: "Andrius",
  lastName: "Zazeckas",
  description:
    "It is very long and boring story, but I am going to tell you anyway.",
  picture:
    "https://images.unsplash.com/photo-1649840974220-9d8494c4a90b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80",
};

localStorage.setItem("profile", JSON.stringify(userProfile));

const renderUserProfile = (profile) => {
  const img = document.createElement("img");
  img.width = "200";
  img.src = profile.picture;
  img.alt = `${profile.firstName} ${profile.lastName} profile picture`;

  const profileName = document.createElement("h4");
  profileName.textContent = `${profile.firstName} ${profile.lastName}`;

  const profileDescription = document.createElement("p");
  profileDescription.textContent = profile.description;

  const div = document.createElement("div");
  div.style.marginTop = "50px";
  div.append(img, profileName, profileDescription);
  document.body.append(div);
};

const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem("profile"));
renderUserProfile(profileInfoFromLocalStorage);

// 3. Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. Po forma sukurkite lentelę joje atvaizduokite informaciją iš localStorage.

const formLS = document.body.querySelector("#localStorageInputForm");
const LOCAL_STORAGE_ITEM_KEY = "users";

// formLS.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const fullNameValue = document.body.querySelector("#fullName").value;
//   const [firstNameLS, lastNameLS] = fullNameValue.split(" ");

//   localStorage.setItem("users", JSON.stringify([{ firstNameLS, lastNameLS }]));
//   const userInLocalStorage = localStorage.getItem("users");

//   console.log(userInLocalStorage);

//   const name = document.createElement("td");
//   name.textContent = JSON.parse(userInLocalStorage)[0];

//   const lastName = document.createElement("td");
//   lastName.textContent = lastNameLS;

//   const tr = document.createElement("tr");

//   tr.append(name, lastName);
//   document.querySelector("tbody").append(tr);
// });

const renderUsersTable = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_KEY));
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  users &&
    users.forEach((user) => {
      const name = document.createElement("td");
      name.innerText = user.name;

      const surname = document.createElement("td");
      surname.innerText = user.surname;

      const tr = document.createElement("tr");
      tr.append(name, surname);
      tbody.append(tr);
    });
};

formLS.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = event.target.querySelector("#fullName").value;
  const [name, surname] = fullName.split(" ");

  const usersInlocalStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_ITEM_KEY)
  );
  if (usersInlocalStorage && usersInlocalStorage.length) {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([...usersInlocalStorage, { name, surname }])
    );
  } else {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([{ name, surname }])
    );
  }
  renderUsersTable();
});

renderUsersTable();
