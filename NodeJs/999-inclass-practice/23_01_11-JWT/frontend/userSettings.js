const getContent = async () => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch("http://localhost:5000/user-settings", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    const content = await response.json();

    if (!response.ok || response.status >= 400) {
      return alert(content.error);
    }

    return content;
  } catch (error) {
    // alert(error.message);
    console.log(error);
  }
};

await getContent();
