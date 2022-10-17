const displayPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const randomNumber = Math.round(Math.random() * 100);
  const post = posts[randomNumber];

  insertPost(post);
};

const insertPost = (newPost) => {
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = JSON.stringify(newPost);

  document.body.querySelector("#usersContainer").append(paragraphElement);
};

export { displayPost, insertPost };
