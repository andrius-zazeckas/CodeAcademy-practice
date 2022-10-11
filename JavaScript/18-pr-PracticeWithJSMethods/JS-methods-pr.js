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
