const getPost = async (postNumber) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postNumber}`,
      {
        method: "GET",
      } // nebutina kai GET darome, dazniausia naudojami POST ir PATCH
    );
    const post = await response.json();

    return post;
  } catch (error) {
    console.error(error);
  }
};

export { getPost };
