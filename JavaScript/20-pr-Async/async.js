// 1. Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 5000);
});

promise.then(() => console.log("Veikia"));

// 2. Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

const promise2 = new Promise((resolve, reject) => {
  const random = Math.round(Math.random() * 5);

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

promise2
  .then(() => console.log("Veikia"))
  .catch(() => console.log("Oops, pažadas buvo atmestas"));

// 3. Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. Nelabai aišku? Pasižiūrėk čia https://javascript.info/promise-chaining apie teoriją - o jei ne, užmesk akį į atsakymus.

const promise3 = new Promise((resolve, reject) => {
  const random = Math.round(Math.random() * 5);

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 1000);
});

promise3
  .then(() => "this is a message")
  .then((message) => console.log(message))
  .catch(() => console.log("Oops, pažadas buvo atmestas"));

// const doAsyncTest = async () => {
//   const getDelayedMessage = async (timer = 5_000) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello!"); // be resolve, await nezinotu, kada gauna atsakyma
//       }, timer);
//     });
//   };

//   console.log(1);

//   // kviecia funkcija. kai grizta atsakymas - naudoja resolve reiksme ir ja talpina result kintamajame
//   // kadangi be await, veikia fone.
//   getDelayedMessage().then((result) => console.log(result));

//   console.log(2);

//   const message = await getDelayedMessage(7_000);

//   console.log(message);

//   console.log(3);
// };

// doAsyncTest();
