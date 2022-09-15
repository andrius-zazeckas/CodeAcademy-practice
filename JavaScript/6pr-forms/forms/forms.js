// Laikas praktikai - pratimai su forma

// Apšilome ir išmokome dirbti su formos elementais, laikas pradėti žiūrėti į labiau kompleksinius sprendimus - jie ne tik reikalaus pasiimti duomenis iš formos, bet ir juos pasikoreguoti/paleisti kitas funkcijas, ciklus ir pan. Tad pradedam (nuo lengvesnių iki sudėtingesnių):

// 1. Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių,
// o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida,
// 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.

// 2. Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo.
// Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente).
// Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

// 1. mano:

// const fullTicketPrice = (6).toFixed(2);
// const halfTicketPrice = (fullTicketPrice * 0.5).toFixed(2);
// const oneThirdTicketPrice = ((fullTicketPrice * 1) / 3).toFixed(2);

// document.querySelector("form").addEventListener("submit", calculateTicketPrice);

// function calculateTicketPrice(event) {
//   event.preventDefault();
//   const ageResult = document.querySelector("input[name=ticketPrice]").value;
//   if (ageResult < 15) {
//     document.querySelector("h1").innerText = halfTicketPrice;
//   } else if (ageResult >= 60) {
//     document.querySelector("h1").innerText = oneThirdTicketPrice;
//   } else if (ageResult >= 16) {
//     document.querySelector("h1").innerText = fullTicketPrice;
//   }
// }

// 1. is atsakymo:

// const ageInput = document.getElementById("age");
// const form = document.querySelector("form");
// const priceDisplay = document.getElementById("price");

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const price = 6;
//   const age = Number(ageInput.value);

//   if (age >= 60) {
//     priceDisplay.textContent = ((1 / 3) * price).toFixed(2);
//   } else if (age <= 16) {
//     priceDisplay.textContent = (0.5 * price).toFixed(2);
//   } else {
//     priceDisplay.textContent = price.toFixed(2);
//   }
// }

// form.addEventListener("submit", handleFormSubmit);

// 2.

const ageInput = document.getElementById("age");
const radioInput = document.querySelector("input[type=checkbox]");
const armyAwaits = document.getElementById("armyEligible");
const form = document.querySelector("form");

form.addEventListener("submit", armySelection);

function armySelection(event) {
  event.preventDefault();
  const age = Number(ageInput.value);
  const isConvicted = radioInput.checked;

  if (age >= 18 && age <= 30 && !isConvicted) {
    armyAwaits.textContent = "Congratulations, You are going to army";
  } else {
    armyAwaits.textContent = "You are not eligible for army :)";
  }
}
