const isItTrue = true;
const number = 5;
const userName = "Andrius";
const user = null; // typeof null yra object tipas
const data = undefined;
const array = []; // typeof array yra object tipas
const obj = {};

const list = [isItTrue, number, userName, user, data, array, obj];

console.log(list);

list.forEach((element) => {
  console.log([element, typeof element]);
});

// jeigu grieztai tik null

const users = [];
if (users === null) {
}

// jeigu bendrai blogos reiksmes (falsy)

if (!users) {
}

// is esmes ! yra kaip jungiklis, jeigu reksme yra truthy, tai ja pavers falsy
// daznai naudojamas if`e patikrinti falsy reiksme

if (5 !== 4) {
  console.log("nelygu"); // if praeis, nes 5 nelygu 4
}

if (Array.isArray([])) {
  // tikriname ar masyvas, nes masyvo typeof yra objektas
}
