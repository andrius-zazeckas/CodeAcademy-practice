// Pratimai

// 1. Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu!(naudoti inline metoda: onclick = "")
// 2. Perrašyti pirmą pratimą su addEventListener(ir nuo šiol naudoti būtent jį ;) ).
// 3. Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.
// 4. Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas.Paspaudus ant mygtuko, skaičius padidėja(+1).
// 5. Sukurk programą, kurioje ilgas paragrafas.Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.
// 6. Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.
// 7. Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų".
// Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus". Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".
// 8. Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis.
// Vartotojas skaičiaus nemato(bet jūs pasiconsole'inkit). Ekrane - trys mygtukai (1, 2, 3).
// Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").
// 9. Parašykite programą, kurioje būtų tekstas "Nespauskite mygtuko".Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į "Neklausote manęs".
// 10. Sukurkite h1, jam duokite 150vh aukštį ir 150vh line - height.Jame įrašykite "Nejudinkite pelytės".
// Jeigu vartotojas pajudins pelytę - pakeiskite tekstą į "Kiek galima neklausyti?!".

// 1.
// <button onclick="myName()">Koks mano vardas</button>   turi būti html`e
// function myName() {
//   alert("Andrius ir Titas");
// }

// 2.

// document.querySelector("button").addEventListener("click", myName);

// 3.

// document.querySelector("button").addEventListener("click", aboutMe);
// function aboutMe() {
//     document.querySelector("p").textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
// }

// 4.

// let counter = 0;

// document.querySelector("button").addEventListener("click", () => {
//   counter++;
//   document.querySelector("h1").innerText = counter;
// });

// 5.
// document.querySelector("p").addEventListener("copy", noCopy);
// function noCopy() {
//   alert("Don't copy my text");
// }

// 6.
// function random() {
//   return (Math.random() * 100 + 1) | 2;
// }
// document.querySelector("button").addEventListener("click", randomInH1);
// function randomInH1() {
//   const randomNumber = random();
//   document.querySelector("h1").innerText = randomNumber;
// }

// 7.
// document.getElementById("adult").addEventListener("click", adult);
// function adult() {
//   document.querySelector("h1").innerText = "Alus";
// }

// document.getElementById("child").addEventListener("click", child);
// function child() {
//   document.querySelector("h1").innerText = "Nepilnametis - nieko neturim";
// }

// 8.

// const randomNumber = (Math.random() * 3 + 1) | 2;
// console.log(randomNumber);

// document.getElementById("one").addEventListener("click", one);
// function one() {
//   randomNumber === 1 ? alert("Yay") : alert("Nay");
// }

// document.getElementById("two").addEventListener("click", two);
// function two() {
//   randomNumber === 2 ? alert("Yay") : alert("Nay");
// }

// document.getElementById("three").addEventListener("click", three);
// function three() {
//   randomNumber === 3 ? alert("Yay") : alert("Nay");
// }

// 9.
// document.body.addEventListener("click", (event) => {
//   const isButton = event.target.nodeName === "BUTTON";
//   if (isButton) {
//     document.getElementById("output").innerText = "Neklausote manęs";
//   }
// });

// 10.
document.querySelector("h1").addEventListener("mousemove", dontMove);
function dontMove() {
  document.querySelector("h1").innerText = "Kiek galima neklausyti?!";
}
