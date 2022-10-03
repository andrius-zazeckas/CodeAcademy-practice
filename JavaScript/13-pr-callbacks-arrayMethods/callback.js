// --------CALLBACKS---------

// 1. Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą.
// Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins.
// O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę,
// ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"),
// tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

// const alertName = (name) => {
//   alert(name);
// };

// const consoleName = (name) => {
//   console.log(name);
// };

// const coreFunction = (name, cbFn) => {
//   cbFn(`${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`);
// };

// coreFunction("anDrius", alertName);

// --------ARRAY METHODS---------

// 1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

// const cars = ["BMW", "VW", "Audi"];

// cars.forEach((element) => {
//   console.log(element);
// });

// 2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

// const cars = ["BMW", "VW", "Audi"];
// cars.forEach((v, i) => console.log(`${i}: ${v}`));

// 3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.).
// Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

// const friendsNames = ["peTras", "Jonas", "aNTanaS"];

// const correctNames = friendsNames.map(
//   (value) => `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
// );

// console.log(correctNames);

// 4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

// const friendsAges = [20, 16, 17, 39, 41, 50];
// const result = friendsAges.filter((age) => age >= 18);
// console.log(result);

// 5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

// const cities = ["Vilnius", "Kaunas", "Marijampole", "Klaipeda"];
// console.log(cities.find((x) => x[0] === "K"));

// 6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

// const cities = ["Vilnius", "kaunas", "Marijampole", "Klaipeda"];
// console.log(cities.some((x) => x[0] === x[0].toLowerCase()));

// 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.

const cities = ["Vilnius", "Kaunas", "Marijampole", "Klaipeda"];
console.log(cities.every((x) => x[0] === x[0].toUpperCase()));
