const getContent = async () => {
  try {
    const response = await fetch("http://localhost:5000/v1/content", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    if (response.ok) {
      const data = await response.json();
      const output = document.body.querySelector("#output");
      output.textContent = data.message;
    }

    if (response.status >= 400) {
      const msg = await response.json();

      alert(msg.error);
    }
  } catch (error) {
    alert(error.message);
  }
};

await getContent();
