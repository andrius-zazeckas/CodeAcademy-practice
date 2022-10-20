import { getPost } from "./getPost.js";
import { showPost } from "./showPost.js";

const form = document.body.querySelector("#getPostNumberForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const postNumber = +document.querySelector("#postNumberInput").value;

  if (typeof postNumber === "number" && !Number.isNaN(postNumber)) {
    // uzdejus pliusa teoriskai nebutinas
    const post = await getPost(postNumber);

    showPost(post);
  }
});

// Iš jau naudoto https://jsonplaceholder.typicode.com/ fiktyvaus API back-end atvaizduoti postą nr. X (vartotojas įveda input  laukelyje skaičių (prisiminkit, kaip tikrinti)) ir prie posto input laukelį - pakeitus jame reikšmę, keičiasi ir posto aprašymas (prisiminkit, kokį HTTP metodą naudoti).
