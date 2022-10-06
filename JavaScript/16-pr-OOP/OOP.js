// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'.
// Sukurkite du objektus ir patikrinkite ar veikia.

// function Car(brand, model, engine) {
//   this.brand = brand;
//   this.model = model;
//   this.engine = engine;
//   this.turnOn = function () {
//     alert("Vroom");
//   };
// }

// const audi = new Car("Audi", "A4", 2);
// const bmw = new Car("BMW", 325, 2.5);

// console.log(audi, bmw);

// audi.turnOn();

// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'.
// basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina.
// Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

// function Car(brand, model, engine, basePrice) {
//   this.brand = brand;
//   this.model = model;
//   this.engine = engine;
//   this.basePrice = basePrice;
//   this.getPrice = function () {
//     let aditionalPrice = 0;
//     if (this.engine === "electric") {
//       aditionalPrice = 10_0000;
//     } else if (this.engine === "diesel") {
//       aditionalPrice = 5_000;
//     }
//     return this.basePrice + aditionalPrice;
//   };
//   this.turnOn = function () {
//     alert("Vroom");
//   };
// }

// const audi = new Car("Audi", "A4", "electric", 10_0000);
// const bmw = new Car("BMW", "325", "diesel", 6_000);

// console.log(audi.getPrice());

// console.log(audi, bmw);

// audi.turnOn();

// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'.
// basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina.
// Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(brand, model, engine, price) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = price;
  this.getPrice = function () {
    let aditionalPrice = 0;

    if (this.engine === "electric") {
      aditionalPrice = 10_0000;
    } else if (this.engine === "diesel") {
      aditionalPrice = 5_000;
    }
    return this.basePrice + aditionalPrice;
  };
  this.turnOn = function () {
    alert("Vroom");
  };
}

const audi = new Car("Audi", "A4", "electric", 7_000);
const bmw = new Car("BMW", 325, "diesel", 5_000);

console.log(audi.getPrice());
