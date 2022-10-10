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

  this.fullnameInTable = function () {
    const tablename = document.body.querySelector("#name");
    tablename.textContent = this.name;
    const tablesurname = document.body.querySelector("#surname");
    tablesurname.textContent = this.surname;
  };
}

document.body.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = document.body
    .querySelector("#fullname")
    .value.trim()
    .toLocaleLowerCase();
  const firstName = nameValue.split(" ")[0];
  const surname = nameValue.replace(firstName, "").trim();
  const capitalization = firstName.charAt(0).toUpperCase();

  const fullname = new Fullname(firstName, surname);
  fullname.fullnameInTable();
});

// const audi = new Car("Audi", "A4", "electric", 7_000);
// const bmw = new Car("BMW", 325, "diesel", 5_000);
