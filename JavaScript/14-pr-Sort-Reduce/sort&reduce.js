// -------SORT-------
// 1. Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

// const friends = ["Tomas", "Dovile", "Evaldas", "Andrius"];

// friends.sort();

// console.log(friends);

// 2. Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

// const friends = ["Tomas", "Dovile", "Evaldas", "Andrius"];

// friends.sort((a, b) => (b > a ? 1 : -1));

// console.log(friends);

// 3. Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

// const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

// numbers.sort((a, b) => b - a);
// console.log(numbers);

// 4. Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).

// const numbers = [10, 5, 20, 4];

// numbers.sort((a, b) => b - a);

// console.log(numbers[0]);

// --------REDUCE--------

// 1. Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

// const numbers = [10, 5, 20, 4];

// const result = numbers.reduce((a, v) => a + v);

// console.log(result);

// 2. Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"])
// ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

// const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

// const threeLetterWordCount = cars.reduce(
//   (a, v) => (v.length === 3 ? a + 1 : a),
//   0
// );

// console.log(threeLetterWordCount);

// 3. Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce

// const numbers = [10, 5, 20, 4];

// console.log(numbers.reduce((a, v) => (a > v ? a : v)));

// -------ARRAYS--------

// 1. Prafiltruojame masyvą, kad rodytų tik pilnamečius.

const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

// console.log(people.filter((legal) => legal.age >= 18));

// 2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu).
// Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"].

// console.log(
//   people.filter((legal) => legal.age >= 18).map((person) => person.name)
// );

// 3. Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

// console.log(
//   people
//     .filter((legal) => legal.age >= 18)
//     .map((person) => person.name)
//     .sort()
// );

// 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price.
// Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).
// Pvz:
// iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
// grąžins: {brangiausias: "lemonade", pigausias: "lime"}

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "banana", price: 20 },
  { name: "kivi", price: 60 },
  { name: "ananas", price: 30 },
];

function lowestHighestDrinkPrice(items) {
  items.sort((a, b) => a.price - b.price);
  return {
    pigiausias: items[0].name,
    brangiausias: items[items.length - 1].name,
  };
}

console.log(lowestHighestDrinkPrice(drinks));
