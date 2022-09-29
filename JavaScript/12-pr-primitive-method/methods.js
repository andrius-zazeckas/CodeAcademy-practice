//1. Pasirašykite variable isLegalAge, kurį priskirkite true arba false.
// Console.log'e atvaizduokite šį variable. Sukurkite antrą console.log,
// kuriame atvaizduokite šį variable su toString() metodu. Turėtų skirtis spalva teksto.

const isLegalAge = true;

console.log(isLegalAge); // Atvaizduos kaip boolean

console.log(isLegalAge.toString()); // Atvaizduos kaip string

// 2. Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

// const milkPrice = 3.15;

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia");
// } else {
//   alert("Centų prireiks...");
// }

// 3. Pakoreguok antra pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

// const milkPrice = 3.627;

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia");
// } else {
//   alert("Centų prireiks...");
// }

// alert(milkPrice.toFixed(2));

// 4. Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio,
// antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti).
// Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS),
// su dviem skaičiais po kablelio (pvz. 7.13 Eur).

const textOutput = document.querySelector("h1");

const form = document.querySelector("form");

const fuelPriceCalculator = (e) => {
  e.preventDefault();
  const fuelPrice = Number(document.getElementById("fuelPrice").value);
  const fuelQuantity = Number(document.getElementById("fuelQuantity").value);
  const fuelSum = fuelPrice * fuelQuantity;

  const textOutput = document.createElement("h1");
  textOutput.innerText = fuelSum.toFixed(2);
  document.body.append(textOutput);
};

form.addEventListener("submit", fuelPriceCalculator);
