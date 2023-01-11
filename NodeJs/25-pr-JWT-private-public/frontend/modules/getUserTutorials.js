const getUserTutorials = async () => {
  const id = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("id="))
    ?.split("=")[1];

  if (!id) {
    return alert("Please login to see your private tutorials");
  }

  try {
    const response = await fetch(
      `http://localhost:5000/v1/user-tutorials/${id}`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    const content = await response.json();

    if (!response.ok || response.status >= 400) {
      return alert(content.error || content.statusText);
      // return window.location.assign(`./login.html`);
    }

    return content;
  } catch (error) {
    // alert(error.message);
    console.log(error);
  }
};

export { getUserTutorials };
