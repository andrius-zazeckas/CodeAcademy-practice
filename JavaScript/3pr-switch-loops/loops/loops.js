// Pratimai

// 1. Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą (atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo skaičiuką dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje).
// 2. Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.
// 3. Prie savo vardo atspaudink ir 'i' raidę, t.y.kelintas ciklas yra(pvz.: "0. Petras", "1. Petras", "2. Petras")...
// 4. Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.

// 1.

// for (let i = 0; i < 10; i++){
//     console.log("Andrius");
// }


// 2.

// const myName = "Andrius";
// const count = 9;
// for (let i = 0; i < count; i++) {
//     console.log(myName);
// }

// 3.

// const myName = "Andrius";
// const count = 10;
// for (let i = 0; i < count; i++) {
//     console.log(`${(i)}. ${myName}`);
// }

// 4.

let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}