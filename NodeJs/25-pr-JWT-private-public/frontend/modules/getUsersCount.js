const getUsersCount = async () => {
  try {
    const response = await fetch("http://localhost:5000/v1/auth/users");
    const usersCount = await response.json();

    if (response.status >= 400) {
      alert(content.error);
      //   return window.location.assign(`./login.html`);
    }

    return usersCount;
  } catch (error) {
    // alert(error.message);
    console.log(error);
  }
};

const usersCount = await getUsersCount();

const content = document.querySelector("#content");
const usersCountEl = document.createElement("h1");
usersCountEl.textContent = `Current users count in database: ${usersCount[0].usersCount}`;

content.append(usersCountEl);
