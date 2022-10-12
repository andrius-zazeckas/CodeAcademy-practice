const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.body.querySelector("#colorInput");
const headingElement = document.createElement("h1");
const userCustomColor = prompt("Iveskite savo spalva");
const colors = ["red", "green", "blue", "yellow"];
let colorChangeTimes = 0;

colors.push(userCustomColor);

colorInput.addEventListener("input", (event) => {
  const colorValue = event.target.value.trim().toLocaleLowerCase();
  const isValueColor = colors.includes(colorValue);

  if (isValueColor) {
    colorChangeTimes++;

    headingElement.textContent = `Pakeitete spalva ${colorChangeTimes} kartu`;

    document.body.prepend(headingElement); // append prideda gale elementa, prepend pradzioje

    productsContainer.style.border = `4px ${colorValue} dashed`;
    console.log("Spalva pritaikoma");
    console.log(colorChangeTimes);
  }

  switch (colorValue) {
    case "red":
      console.log("red");
      break;
    case "green":
      console.log("green");
      break;
    case "blue":
      console.log("blue");
      break;
    case "yellow":
      console.log("yellow");
      break;
    default:
      console.log("Nepriimtina spalva");
  }
});

// ToDo: switch condition for colors, array of colors, how many times have color changed
