// Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis).
// Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e)
// kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą.

class Car {
  constructor(brand, model, mileage, price, image) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }

  addToList() {
    const card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", () => alert(this.price));

    const img = document.createElement("img");
    img.src = this.image;

    const carDescription = document.createElement("h6");
    carDescription.innerText = `${this.brand} ${this.model} ${this.mileage}`;

    card.append(img, carDescription);
    const wrapper = document.body.querySelector("div.wrapper").append(card);
  }
}

document.body.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const brand = document.body.querySelector("#carBrand").value;
  const model = document.body.querySelector("#model").value;
  const mileage = document.body.querySelector("#mileage").value;
  const price = document.body.querySelector("#price").value;
  const image = document.body.querySelector("#url").value;

  const car = new Car(brand, model, mileage, price, image);
  car.addToList();
});
