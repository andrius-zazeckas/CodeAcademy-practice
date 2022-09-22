// 1. Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
// L
// L
// L
// L L L L

// const form = document.querySelector("form");

// function printShapeL(event) {
//   event.preventDefault();
//   const listName = document.getElementById("textResult");
//   let multiplierInput = document.getElementById("number").value;

//   let output = "";
//   for (i = 0; i < multiplierInput - 1; i++) {
//     output += "L<br>";
//   }
//   for (i = 0; i < multiplierInput; i++) {
//     output += "L";
//   }
//   listName.innerHTML = output;
// }

// form.addEventListener("input", printShapeL);

// 2. Sukurkite panašią funkciją, kuri atspausdintų C raidę.
// t.y. jei kviesite funkciją fn(5), tai turėtų atspausdinti tokį rezultatą:
// CCCCC
// C
// C
// C
// CCCCC

// const form = document.querySelector("form");

// function printShapeC(event) {
//   event.preventDefault();
//   const listName = document.getElementById("textResult");
//   let multiplierInput = document.getElementById("number").value;

//   let output = "";
//   for (i = 0; i < multiplierInput; i++) {
//     output += "C";
//   }
//   output += "<br>";
//   for (i = 0; i < multiplierInput - 2; i++) {
//     output += "C<br>";
//   }
//   for (i = 0; i < multiplierInput; i++) {
//     output += "C";
//   }
//   listName.innerHTML = output;
// }

// form.addEventListener("input", printShapeC);

// 3. Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
// Pvz.: Petras, Jonas, Mantas, Antanas.

// function showNamesInOrder(event) {
//   event.preventDefault();
//   const printResult = document.getElementById("textResult");
//   const inputValue = document.getElementById("nameInput").value.trim();

//   printResult.innerText += `${inputValue}, `;
// }

// document.getElementById("nameInput").addEventListener("blur", showNamesInOrder);

// 4. Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
// Pvz.: fn(101, 81) grąžins 101.

// const form = document.querySelector("form");

// function whichNumberisCloser(n1, n2, cN) {
//   if (cN - n1 < cN - n2) {
//     alert(n1);
//   } else {
//     alert(n2);
//   }
// }

// function handleForm(event) {
//   event.preventDefault();
//   const cN = 100;
//   const n1 = document.getElementById("numberOne").value;
//   const n2 = document.getElementById("numberTwo").value;
//   whichNumberisCloser(n1, n2, cN);
// }
// form.addEventListener("submit", handleForm);

// 5. Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5.
// Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).

// let randomNumber = Math.floor(Math.random() * 5 + 1);
// console.log(randomNumber);

// const isRandomNumber = (event) => {
//   event.preventDefault();
//   const numberInput = Number(document.getElementById("number").value);

//   if (numberInput === randomNumber) {
//     alert("Atspejai!");
//   } else {
//     alert("Bandyk dar karta");
//   }
// };

// document.querySelector("form").addEventListener("input", isRandomNumber);

// 6. Pakoreguokite penktą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e.

let randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);

let countInputs = 0;

const isRandomNumber = (event) => {
  event.preventDefault();
  const numberInput = Number(document.getElementById("number").value);
  countInputs++;

  if (numberInput === randomNumber) {
    alert(`Atspejai! Tau prireike ${countInputs} kartu`);
  } else {
    alert("Bandyk dar karta");
  }
};

document.querySelector("form").addEventListener("input", isRandomNumber);
