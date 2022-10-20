const postElement = document.createElement("p");

const showPost = (post) => {
  postElement.textContent = JSON.stringify(post);

  document.body.append(postElement);
};

export { showPost };
