// 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

const userMinutesInput = document.body.querySelector("#minutesInput");

const minutesToSecondsCalc = () => {
  const calc = userMinutesInput.value * 60;
  console.log(`${calc} seconds`);
};

userMinutesInput.addEventListener("input", minutesToSecondsCalc);

// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno
// (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

const userYearsInput = document.body.querySelector("#yearInput");

const yearsToDaysCalc = () => {
  const calc1 = userYearsInput.value * 365;
  console.log(`${calc1} days`);
};

userYearsInput.addEventListener("input", yearsToDaysCalc);

// 3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

const raiseToThePowerOfTwo = (x) => x ** 2;
console.log(`${raiseToThePowerOfTwo(5)} - kvadratu pakeltas skaicius`);

// 4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50

const triangleRadius = (x, y) => (x * y) / 2;
console.log(`${triangleRadius(10, 10)} - trikampio plotas`);

// 5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".

const myname = (text) => text[text.length - 1];
console.log(myname("Andrius"));

// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"

const reverseName = (text) => text.split("").reverse().join("").toLowerCase();
console.log(reverseName("Petras"));

const name1 = "Andrius";
const namesplit = name1.split("");
const namereverse = namesplit.reverse();
const join = namereverse.join("");
console.log(join.toLowerCase());

// 7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const biggestNegativeNumber = (nums) =>
  nums.filter((x) => x < 0).sort((a, b) => b - a)[0];
console.log(biggestNegativeNumber([-1, -100, -5, 10, 0, 11]));

// 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

const randomNumbers = (quant) => {
  const generatedNums = [];
  for (let i = 0; i < quant; i++) {
    generatedNums.push(Math.floor(Math.random() * 10) + 1);
  }
  return generatedNums;
};

console.log(randomNumbers(3));

// 9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const sumOverHundred = (n1, n2) => n1 + n2 > 100;
console.log(sumOverHundred(60, 50));

// 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array
// išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka. Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}])
//  -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const people = [
  { name: "Jonas", age: 25 },
  { name: "Alfredas", age: 25 },
  { name: "Kasparas", age: 20 },
];

const sortedByAge = () =>
  people
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .sort((a, b) => a.age - b.age);

sortedByAge();

console.log(people);

// 11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

// mano variantas:
const givenDate = new Date("2022, 10, 08");
const day = givenDate.getDay();
const isWeekend = day === 6 || day === 0 ? "It's weekend" : "It's working day";

console.log(isWeekend);

// is atsakymo:

function isItHoliday(date) {
  const holidays = ["2020-01-01", "2020-05-25"];
  return holidays.some(
    (holiday) => new Date(holiday).getDate() === date.getDate()
  );
}

console.log(isItHoliday(new Date("2020-05-25")));

// 12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const missingNumber = (array) =>
  array.find((x, i) => x + 1 !== array[i + 1]) + 1;

console.log(missingNumber([1, 2, 4, 5]));
