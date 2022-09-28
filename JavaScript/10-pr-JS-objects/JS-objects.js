// 1. Susikuriame objektą "car". Duodame jam tris properties: "doors", "color", "brand".
// Reikšmes įrašykite patys, tik atminkite - doors bus skaičius, o color ir brand - string'ai.
// Pasiconsole'inkite ir patikrinkite ar matosi car objektas, ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors).

// const car = {
//   doors: 4,
//   color: "blue",
//   brand: "Audi",
// };

// console.log(car.color);

// 2. Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'.
// Šis objektas turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje)
// - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto,
// nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja.

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const person = {
//     name: document.getElementById("name").value,
//     surname: document.getElementById("surname").value,
//   };
//   console.log(person);
// });

// 3. Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių.
// Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = e.target.elements.name.value;
  const userAge = Number(e.target.elements.age.value);
  const isLegalAge = userAge >= 18;

  const person = {
    name: userName,
    isLegal: isLegalAge,
  };
  console.log(person);
});
