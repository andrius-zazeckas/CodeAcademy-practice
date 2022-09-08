// Pratimai

// 1. Su while ciklu pasirašykite, kad Jūsų vardą išvestų į console 3 kartus.
// 2. Sukurkite kintamąjį(let combo = "").Kiekvieną kartą paleidus ciklą į combo prisirašo Jūsų vardas(t.y.while ciklo viduje darytų combo += "Petras").
// Sukurkite programą, kur bus kintamasis(let times = 5), kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas Jūsų vardas.
// Jei times skaičius 0 arba mažiau - vis tiek bent vieną kartą įvyks ciklas ir Jūsų vardą įrašys į combo.
//     Pvz:
// times = 0; combo = "Petras"
// times = 1; combo = "Petras"
// times = 2; combo = "PetrasPetras"
// times = 3; combo = "PetrasPetrasPetras"


// 1.
// const myName = "Andrius";
// let i = 3;
// while (i > 0) {
//     console.log(myName);
//     i--;
// }


// 2.

let combo = "";
const myName = "Andrius";
let times = 3;
do {
    combo += myName;
    times--;
} while (times > 0);
console.log(combo);
