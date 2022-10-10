// 1. Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.
// JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje.
// Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite,
// kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization);
// sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę.
// Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė,
// o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

function Fullname(name, surname) {
  this.name = name;
  this.surname = surname;

  this.addToTable = function () {
    const tablename = document.body.querySelector("#name");
    tablename.textContent = this.name;
    const tablesurname = document.body.querySelector("#surname");
    tablesurname.textContent = this.surname;
  };
}

const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase();

document.body.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = document.body
    .querySelector("#fullname")
    .value.toLocaleLowerCase();

  // mano variantas
  //   const firstName = capitalize(nameValue[0]).trim();
  //   const surname = capitalize(nameValue[1]).trim();

  // CAO atsakymo variantas
  const [firstName, surname] = nameValue
    .split(" ")
    .map((namePart) => capitalize(namePart.trim()));

  const fullname = new Fullname(firstName, surname);
  fullname.addToTable();
});

// Prisimename darbą su masyvais: sukurkite funkciją, kuri priims masyvą
// ir išfiltruos visus pasikartojančius skaičius bei šį masyvą grąžins atgal.
// Pvz:
// paduodu: [1, 3, 3, 5, 5, 5]
// grąžina: [1, 3, 5]

const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 3, 3, 5, 5, 5]));
