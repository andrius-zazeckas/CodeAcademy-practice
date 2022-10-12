// 1. Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies.
// Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

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
