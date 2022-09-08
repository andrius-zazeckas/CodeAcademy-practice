// const car = "BMW";

// switch (car) {
//     case "VW":
//     case "Audi":
//     case "Bentley":
//     case "Bugatti":
//     case "Lamborghini":
//     case "Porsche":
//         console.log("VW group");
//         break;
//     case "BMW":
//     case "Mini":
//     case "Rolls-Royce":
//         console.log("BMW group");
//         break;
//     default:
//         console.log("Nepriklauso jokiai grupei")
// }

// const userInput = "Obuolys";
// switch (userInput) {
//     case "Obuolys":
//     case "Kivis":
//     case "Bananas":
//     case "Ananasas":
//     case "Agrastas":
//         console.log("Vaisius");
//         break;
//     case "Pomidoras":
//     case "Agurkas":
//     case "Bulve":
//     case "Salota":
//     case "Paprika":
//         console.log("Darzove");
//         break;
//     default:
//         console.log("Nei daržovė, nei vaisius")
// }

let weekDay = new Date().getDay();
switch (weekDay) {
    case 0:
        weekDay = 'Sekmadienis';
        break;
    case 1:
        weekDay = 'Pirmadienis';
        break;
    case 2:
        weekDay = 'Antradienis';
        break;
    case 3:
        weekDay = 'Trečiadienis';
        break;
    case 4:
        weekDay = 'Ketvirtadienis';
        break;
    case 5:
        weekDay = 'Penktadienis';
        break;
    case 6:
        weekDay = 'Šeštadienis';
        break;
}
console.log(weekDay);