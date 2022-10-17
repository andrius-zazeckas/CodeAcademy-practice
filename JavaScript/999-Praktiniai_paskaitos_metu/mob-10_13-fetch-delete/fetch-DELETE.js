import { displayPost } from "./displayPost.js";
import { onPatch } from "./onPatch.js";

const deleteButton = document.querySelector("#deleteButton");
const patchButton = document.querySelector("#patchButton");

await displayPost();

const onDelete = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  const isPostDeleted = response.ok;

  if (isPostDeleted) {
    document.body.querySelector("#usersContainer").innerHTML = "";
  }
};

deleteButton.addEventListener("click", onDelete);
patchButton.addEventListener("click", onPatch);
