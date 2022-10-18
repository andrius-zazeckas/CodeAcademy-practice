const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();

document.body.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userInputValue = document.body.querySelector("#showPostInput").value;

  const showUserRequestedPost = posts[userInputValue - 1];

  insertPost(showUserRequestedPost);

  console.log(showUserRequestedPost);
});

const paragraphElement = document.createElement("p");

const insertPost = (newPost) => {
  paragraphElement.textContent = JSON.stringify(newPost);

  document.body.append(paragraphElement);
};
