const racingCar = {
  manufacturer: "BMW",
  enginePowerHP: 2000,
  dateOfManufacture: 2018,
  released: true,
};

// console.log(racingCar);

const consumerCar = {
  manufacturer: "VW",
  enginePowerHP: 160,
  dateOfManufacture: 2023,
  released: false,
};

// console.log(consumerCar);

function showMostPowerfulManufacturer(carOne, carTwo) {
  const lessPowerfullCar =
    carOne.enginePowerHP < carTwo.enginePowerHP ? carOne : carTwo;

  const mostPowerfulCar =
    carOne.enginePowerHP > carTwo.enginePowerHP ? carOne : carTwo;

  //   alert(
  //     `${mostPowerfulCar.manufacturer} car is better (${mostPowerfulCar.enginePowerHP})`
  //   );

  alert(
    `${mostPowerfulCar.manufacturer} car is better ${lessPowerfullCar.manufacturer} `
  );
}

showMostPowerfulManufacturer(consumerCar, racingCar);
