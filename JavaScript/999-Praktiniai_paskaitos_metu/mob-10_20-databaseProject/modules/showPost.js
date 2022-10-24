const showPost = (post) => {
  const postTitle = document.querySelector("#postTitle");
  const postContainer = document.querySelector("#postContainer");
  const postBody = document.querySelector("#postBody");
  const updatePostButton = document.querySelector("#updatePostButton");

  postContainer.style.visibility = "visible";
  updatePostButton.style.visibility = "visible";

  postTitle.textContent = post.title;
  postBody.textContent = post.body;
};

export { showPost };
