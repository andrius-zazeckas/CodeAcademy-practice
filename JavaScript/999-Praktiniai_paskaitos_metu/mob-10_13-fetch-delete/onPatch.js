import { insertPost } from "./displayPost.js";

const onPatch = async () => {
  try {
    const dataToUpdate = {
      userId: 1,
      id: 8,
      title: "Lorem Ipsum",
      body: "Vyksta paskaita",
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PATCH",
        body: JSON.stringify(dataToUpdate),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const isPostPatched = response.ok;

    if (isPostPatched) {
      const updatedPost = await response.json();

      document.body.querySelector("#usersContainer").innerHTML = "";
      insertPost(updatedPost);
    }
  } catch (error) {
    console.error(error);
  }
};

export { onPatch };
