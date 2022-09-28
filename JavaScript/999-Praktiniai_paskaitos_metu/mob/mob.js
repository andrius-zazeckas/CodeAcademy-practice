const userName = prompt("Your name");
const userAge = +prompt("Your age");
const userRegion = navigator.language.toLocaleLowerCase();
const hasAppropriateAge = userAge >= 16;
const isLithuanianUser = userRegion === "en-us";

console.log({ userName, userAge });

// console.log(navigator.language);

// if (userAge === 32) {
//   alert("sveikinu");
// }

if (hasAppropriateAge && isLithuanianUser) {
  const generateCoupon = userName.slice(0, 3);
  const randomNumber = parseInt(1_000 + Math.random() * 8_999);
  const giftCode = `${generateCoupon}${randomNumber}`;
  alert(`Jums priklauso nuolaidu kodas: ${giftCode}`);
}

// ToDo: user object
