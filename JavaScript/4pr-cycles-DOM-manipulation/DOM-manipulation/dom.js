// Pratimai

//1. Susikurkite projektą, be jokių HTML tag'ų body. Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>.
//2. Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .
//3. Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".
//4. Ištaisykite klaidą. Su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':
//5. apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti).
//   Pirma Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

// 1.

// document.body.innerHTML = "<h2>Andrius</h2>"

// 2.

// document.getElementById("myName").textContent = "Andrius"

// 3.

// document.getElementsByClassName("ulist")[2].textContent = "Suris"

// 4.

// document.querySelectorAll("p>span")[1].textContent = "BLUE"

// 5.

const firstListItem = document.querySelector('ol>li:first-child');
const secondListItem = document.querySelector('ol>li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;



