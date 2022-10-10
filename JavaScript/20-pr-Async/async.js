const getDelayedMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello!"); // be resolve, await nezinotu, kada gauna atsakyma
    }, 1_000);
  });
};

const getDelayedMessage1 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("bla!"); // be resolve, await nezinotu, kada gauna atsakyma
    }, 1_000);
  });
  const result = await Promise;
  console.log(result);
};

console.log(1);

// kviecia funkcija. kai grizta atsakymas - naudoja resolve reiksme ir ja talpina result kintamajame
// kadangi be await, veikia fone.
getDelayedMessage().then((result) => console.log(result));

console.log(2);

getDelayedMessage1();

console.log(3);
