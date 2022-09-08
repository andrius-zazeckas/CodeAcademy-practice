// Pratimai

// 1. Suskaičiuok su JS koks bus cos(0)(t.y.cos, kai kampas 0 radians).
// 2. Sukurk random skaičių tarp 1 ir 5(įskaitant abu).
// 3. Sukurk random skaičių tarp 5 ir 12(įskaitant abu).
// 4. Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne.Tikimybė laimėti - viena iš penkių.
// (Hint: čia reikės if-else su math random).

// 1. 

// const calculateCos = Math.cos(0);
// console.log(calculateCos);

// 2.

// const calculateRandom = Math.floor(Math.random ()*5)+1;
// console.log(calculateRandom);

// 3.

function calculateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = calculateRandom(5, 12)
console.log(rndInt);
