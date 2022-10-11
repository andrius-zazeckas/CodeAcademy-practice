const doAsyncTest = async () => {
  const getDelayedMessage = async (timer = 5_000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello!"); // be resolve, await nezinotu, kada gauna atsakyma
      }, timer);
    });
  };

  console.log(1);

  // kviecia funkcija. kai grizta atsakymas - naudoja resolve reiksme ir ja talpina result kintamajame
  // kadangi be await, veikia fone.
  getDelayedMessage().then((result) => console.log(result));

  console.log(2);

  const message = await getDelayedMessage(7_000);

  console.log(message);

  console.log(3);
};

doAsyncTest();
