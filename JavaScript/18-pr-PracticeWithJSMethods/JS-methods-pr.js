// 1. Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.
// const p1 = new Person("Petras", 16)
// p1.compareAge() => "Petras is old enough to drink";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isLegalAge() {
    return this.age >= 18
      ? console.log(`${this.name} is old enough to drink`)
      : console.log(`${this.name} must go home :)`);
  }
}

const human = new Person("Andrius", 18);

human.isLegalAge();

// 2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

const onlyNumbers = (arr) => arr.filter(Number);
console.log(onlyNumbers([1, "5", "a", "g", "z", 6]).map(Number));

// 3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

const duplicateOnlyLetters = (letters) =>
  letters
    .split("")
    .map((v) => (v.match(/[a-z]/i) ? v.repeat(2) : v)) // galima naudoti ? v + v : v
    .join("");

console.log(duplicateOnlyLetters("Andrius 123 &% Zazeckas"));

// 4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas.
// Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.

// mano variantas
const isPostCodeCorrect = (code) =>
  code.length === 5 || code.match("")
    ? code.match(/^\d/)
      ? "Post code is correct"
      : "Post code is incorrect"
    : "Post code is incorrect";
console.log(isPostCodeCorrect("abc123"));
console.log(isPostCodeCorrect("12345"));
console.log(isPostCodeCorrect("123ab"));

// CAO atsakymas

const isValidPostCode = (postCode) =>
  /^[0-9]{5}|[0-9]{3}[A-Za-z]{2}$/.test(postCode);
console.log(isValidPostCode("abc123"));
console.log(isValidPostCode("12345"));
console.log(isValidPostCode("123ab"));

// 5. Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".
// pvz:
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) ➞ []

const jazzify = (array) =>
  array.map((element) =>
    element.endsWith("7") ? element : element.concat("7")
  );
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify([]));
