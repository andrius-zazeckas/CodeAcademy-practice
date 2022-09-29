// for (let i = 0; i < 100; i++) {
//   const isOddNumber = i % 2 === 1;

//   if (isOddNumber) {
//     console.log(i);
//   }
// }

// eina mazejimo tvarka ir parodo skaicius kurie dalinasi is 5 be liekanos
// let i = 80;

// while (i > 0) {
//   const isDivisibleByFive = i % 5 === 0;

//   if (isDivisibleByFive) {
//     console.log(i);
//   }

//   i--;
// }

// atspausdina atskirai masyvo vardus ir tada isveda kas antra varda

// const names = [
//   "Jurga",
//   "Jonas",
//   "Augustas",
//   "Simas",
//   "Dalia",
//   "Martynas",
//   "Rokas",
// ];

// names.forEach((name, i) => {
//   if (i % 2 === 0) console.log(name);
// });

//

const userNumber = +prompt("Iveskite skaiciu");
const randomNumber = Math.round(Math.random() * 1_000);
// alert(Math.ceil(randomNumber / userNumber) ** 2); // tiesiog kelia kvadratu

const magicNumber = Math.ceil(randomNumber / userNumber);
console.log(magicNumber);
alert(Math.pow(magicNumber, 4));
