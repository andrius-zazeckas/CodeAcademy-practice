const specialCodeElement = document.getElementById("specialCode");
let count = 0;
let i = 0;

// for (let index = 0; index < 1500; index++) {
//   document.getElementById("count").append(index);
// }

for (const element of ["A", "S", "D"]) {
  console.log(element);
}

const interval = setInterval(() => {
  document.getElementById("count").innerText = i++;

  if (i === 20) {
    clearInterval(interval);
  }
}, 50);

specialCodeElement.addEventListener("mouseover", () => {
  incrementCount();

  document.getElementById("count").innerText = count;
});

document.getElementById("count").addEventListener("click", () => {
  resetCount();
  document.getElementById("count").innerText = count;
});

const colorTheCode = () => {
  if (count >= 20) {
    specialCodeElement.style = "background-color: red";
  } else if (count >= 10) {
    specialCodeElement.style = "background-color: yellow";
  }
};

const incrementCount = () => {
  count++;
  colorTheCode();
};

const resetCount = () => {
  count = 0;
  colorTheCode();
};
