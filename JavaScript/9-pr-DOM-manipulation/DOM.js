// 1. H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

// const nameJumpToCenter = () => {
//   const h1Style = document.getElementById("myh1");
//   h1Style.style.color = "red";
//   h1Style.style.fontSize = "64px";
//   h1Style.style.fontWeight = "bold";
//   h1Style.style.margin = "50vh";
// };

// document.getElementById("myh1").addEventListener("click", nameJumpToCenter);

// 2. Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė.
// Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę.
// Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

// const styleBtn = document.getElementById("btnJump");
// styleBtn.style.cssText = "position: absolute; top:0; left:0";

// let isInOriginalPosition = true;
// const getBtnJump = (event) => {
//   event.target.style.cssText = isInOriginalPosition
//     ? "position:absolute; bottom:0; right:0;"
//     : "position:absolute; top:0; left:0;";
//   isInOriginalPosition = !isInOriginalPosition;
// };

// document.getElementById("btnJump").addEventListener("click", getBtnJump);

// 3. Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.

// const styleBtn = document.getElementById("btnJump");
// styleBtn.style.cssText = "position: absolute; top:0; left:0";

// // const buttonSpinning = [
// //   { transform: "rotate(0)" },
// //   { transform: "rotate(360deg)" },
// // ];

// // const buttonTiming = {
// //   duration: 2000,
// //   iterations: Infinity,
// // };

// // const button = document.getElementById("btnJump");

// // button.addEventListener("click", () => {
// //   button.animate(buttonSpinning, buttonTiming);
// // });

// let corner = 0;
// const cornerStyles = [
//   "position:absolute; top:0; right:0;",
//   "position:absolute; bottom:0; right:0;",
//   "position:absolute; bottom:0; left:0;",
//   "position:absolute; top:0; left:0;",
// ];
// function changePosition(event) {
//   if (corner < cornerStyles.length) {
//     event.target.style.cssText = cornerStyles[corner];
//     corner++;
//   }
//   if (corner === cornerStyles.length) {
//     corner = 0;
//   }
// }

// document.getElementById("btnJump").addEventListener("click", changePosition);

// 4. Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą.
// Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas.
// Jei daugiau nei du simboliai - puslapio fonas žalias.

// const myName = document.getElementById("myName");
// const form = document.querySelector("form");

// function changeColorOnName(event) {
//   const myName = event.target.value;
//   document.body.style.backgroundColor = myName.length < 3 ? "red" : "green";
// }

// form.addEventListener("input", changeColorOnName);

// CAO Atsakymas:
// document.getElementById("myName").addEventListener("input", (event) => {
//   const myName = event.target.value;
//   document.body.style.backgroundColor = name.length < 3 ? "red" : "green";
// });

// 5. Sukurkite mygtuką HTML'e.
// O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]).
// Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą.

// const buttonColors = ["red", "green", "blue", "yellow"];
// const button = document.getElementById("button");

// const changeButtonColor = (event) => {
//   const randomIndex = Math.round(Math.random() * 4);
//   event.target.style.backgroundColor = buttonColors[randomIndex];
// };

// button.addEventListener("click", changeButtonColor);

// 6. Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas.
// Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai),
// šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko,
// jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.

const buttonColors = [];
const button = document.getElementById("button");

const changeButtonColor = (event) => {
  const randomIndex1 = Math.round(Math.random() * 256);
  const randomIndex2 = Math.round(Math.random() * 256);
  const randomIndex3 = Math.round(Math.random() * 256);
  event.target.style.backgroundColor = `rgb(${randomIndex1}, ${randomIndex2}, ${randomIndex3})`;
};

button.addEventListener("click", changeButtonColor);
``;

// CAO atsakymas
// function generateRandomColor() {
//   const randomBetween = (min, max) =>
//     min + Math.floor(Math.random() * (max - min + 1));
//   const r = randomBetween(0, 255);
//   const g = randomBetween(0, 255);
//   const b = randomBetween(0, 255);
//   return `rgb(${r},${g},${b})`;
// }

// document.querySelector("button").addEventListener("click", (event) => {
//   event.target.style.backgroundColor = generateRandomColor();
// });
