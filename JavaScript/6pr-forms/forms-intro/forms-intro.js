// Įžanginiai Pratimai

// 1. Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.
// 2. Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]".
// 3. Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]";
// jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".

// 1. ir 2.
// document.querySelector("form").addEventListener("submit", myNameAlert);

// function myNameAlert(event) {
//   event.preventDefault();
//   const nameResult = document.querySelector("input[name=myName]").value;
//   alert(nameResult);
// }

// document.querySelector("form").addEventListener("submit", addMyAge);

// function addMyAge(event) {
//   event.preventDefault();
//   const ageResult = document.querySelector("input[name=myAge]").value;
//   const text = document.createTextNode(ageResult);
//   const pNode = document.querySelector("h1");
//   pNode.appendChild(text);
// }

// 3.

document.querySelector("form").addEventListener("submit", canYouDrive);

function canYouDrive(event) {
  event.preventDefault();
  const nameResult = document.querySelector("input[name=myName]").value;
  const ageResult = document.querySelector("input[name=myAge]").value;

  if (ageResult >= 18) {
    document.querySelector("h1").innerText = "Vairuoti gali: ";
    const text = document.createTextNode(nameResult);
    const pNode = document.querySelector("h1");
    pNode.appendChild(text);
  } else if (ageResult < 18) {
    document.querySelector("h1").innerText = "Dar mokysis vairuotis: ";
    const text = document.createTextNode(nameResult);
    const pNode = document.querySelector("h1");
    pNode.appendChild(text);
  }
}
