// Pratimai

//1. Ne visos funkcijos turi return statement(nors dažniausiai taip yra).Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį:)
//2. Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.
//3. Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių(t.y. "Petras", "Slekys" => 12).
//4. Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę(pvz. 0 => A; 1 => B; 2 => C ir t.t.).
// Hint: Jums reikės pirma sukurti Array su visomis raidėmis(["A", "B", C",..."Z"]),
// o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array - pasižiūrėkite čia.
//5. Sukurkite funkciją, kuri paims tris parametrus(n1, n2, operator).
// Operator gali būti "sum", "sub", "div", "multi"(matematinės reikšmės - sudėti, atimti, padalinti, padauginti).
// n1 ir n2 bus skaičiai.Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija(pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...).
// Hint: Reikės funkcijoje naudoti if-else arba switch.
//6. Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10(įskaitant),
// kita - gautą skaičių pakelia kvadratu.Iškviesk abi funkcijas vienoje eilutėje(pvz.squareNum(generateRandomNumber()) => 1...100).



// 1.

// function nameFunction() {
//     return "Andrius"
// }
// alert(nameFunction())

// 2.

// function generateRandomNumber() {
//     let random = Math.random() * 5 + 1;
//     random = Math.floor(random);
//     return random;
// }
// console.log(generateRandomNumber())

// 3.

// function nameFunction() {
//     const fname = "Andrius";
//     const fname2 = "Zazeckas";
//     return fname + fname2;
// }

// console.log(nameFunction().length)

// 4.

// function alphabet(index) {
//     const alfabetas = ["A", "B", "C", "D"]
//     return alfabetas[index];
// }
// console.log(alphabet(0))

// 5.

// function calcFunction(n1, n2, operator) {
//     switch (operator) {
//         case 'sum':
//             return n1 + n2;
//         case 'sub':
//             return n1 - n2;
//         case 'div':
//             return n1 / n2;
//         case 'multi':
//             return n1 / n2;
//     }
// }
// console.log(calcFunction(5, 1, 'sub'))

// 6.

function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}
function squareNum(number) {
    return Math.pow(number, 2);
}
console.log(squareNum(generateRandomNumber()))