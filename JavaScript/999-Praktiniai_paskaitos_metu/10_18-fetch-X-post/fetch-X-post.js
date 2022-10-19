const paragraphElement = document.createElement("p");

document.body.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const userInputValue = document.body.querySelector("#showPostInput").value;

  const showUserRequestedPost = posts[userInputValue - 1];

  insertPost(showUserRequestedPost);

  console.log(showUserRequestedPost);
});

const insertPost = (newPost) => {
  paragraphElement.textContent = JSON.stringify(newPost);

  document.body.append(paragraphElement);
};
