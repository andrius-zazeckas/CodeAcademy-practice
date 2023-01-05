const getContent = async () => {
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const email = urlParams.get("email");

  try {
    const response = await fetch("http://localhost:5000/v1/articles", {
      // headers: { authorization: `Bearer ${localStorage.getItem(`${email}`)}` },
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const content = await response.json();

    if (response.status >= 400) {
      alert(content.error);
      return window.location.assign(`./login.html`);
    }

    return content;
  } catch (error) {
    // alert(error.message);
    console.log(error);
  }
};

export { getContent };
