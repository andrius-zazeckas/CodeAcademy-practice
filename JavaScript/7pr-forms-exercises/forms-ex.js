// 1. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų -
// prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų).
// Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

// const ageInput = document.getElementById("totalWorkRecord");
// const textResult = document.getElementById("bonus");
// const form = document.querySelector("form");

// form.addEventListener("submit", calculateBonus);

// function calculateBonus(event) {
//   event.preventDefault();
//   const age = Number(ageInput.value);
//   let bonus = 50;

//   if (age >= 10) {
//     bonus += 50;
//   }
//   if (age >= 20) {
//     bonus += 100;
//   }

//   textResult.textContent = `${bonus}`;
// }

// 2. Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma).
// Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100,
// tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four,
// except that any year divisible by 100 is a leap year only if it is also divisible by 400).
// Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja.
// Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

// const form = document.querySelector("form");

// function leapYearCalculator(event) {
//   event.preventDefault();
//   const yearInput = Number(document.getElementById("leapYear").value);
//   const textResult = document.getElementById("leapResult");
//   if ((yearInput % 4 == 0 && yearInput % 100 != 0) || yearInput % 400 == 0) {
//     textResult.textContent = "Keliamieji metai";
//   } else {
//     textResult.textContent = "Ne keliamieji metai";
//   }
// }

// form.addEventListener("submit", leapYearCalculator);

// 3. Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

// const form = document.querySelector("form");

// const celsiusToFarenheit = (event) => {
//   event.preventDefault();
//   const temp = Number(document.getElementById("converter").value);
//   const textResult = document.getElementById("result");

//   farenheit = temp * 1.8 + 32;
//   textResult.innerText = farenheit;
// };
// form.addEventListener("input", celsiusToFarenheit);

// 4. Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis,
// jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

// const form = document.querySelector("form");

// const emailRegitration = (event) => {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const textResult = document.getElementById("result");
//   const ischecked = document.getElementById("checkbox").checked;

//   textResult.innerText = ischecked
//     ? `El.paštas ${email} sėkmingai užregistruotas`
//     : "Registracija nesėkminga";
// };

// form.addEventListener("submit", emailRegitration);

// 5. Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>.
// Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)

// const form = document.querySelector("form");

// function nameMultiplier(event) {
//   event.preventDefault();
//   const listName = document.getElementById("list");
//   const nameValue = document.getElementById("yourName").value;
//   let multiplierInput = document.getElementById("number").value;

//   listName.innerText = "";

//   for (let i = 0; i < multiplierInput; i++) {
//     const listItem = document.createElement("li");
//     listItem.innerText = nameValue;
//     listName.append(listItem);
//   }
// }
// form.addEventListener("submit", nameMultiplier);

// 6. Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas.
// Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
// Pvz:
// Įvesta: 2
// Rezultatas:
// *
// **

const form = document.querySelector("form");

function paintTriangle(event) {
  event.preventDefault();
  const listName = document.getElementById("textResult");
  const nameValue = "*";
  let multiplierInput = document.getElementById("number").value;

  let output = "";
  for (i = 0; i < multiplierInput; i++) {
    for (j = 0; j <= i; j++) {
      output += nameValue;
    }
    output += "<br>";
    listName.innerHTML = output;
  }
}
form.addEventListener("submit", paintTriangle);
