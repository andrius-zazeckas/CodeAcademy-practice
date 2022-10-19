const createTodoForm = document.body.querySelector("form#create-todo-form");

const showAdditionStatus = (isSuccessfullyAdded) => {
  if (isSuccessfullyAdded) {
    const succesfullTextParagraph = document.createElement("p");
    succesfullTextParagraph.textContent = "Congrats";
    createTodoForm.prepend(succesfullTextParagraph);
    return;
  }
  alert("could not add");

  throw Error("Negalima ikelti");
};

createTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const localStorageTodosName = "todos";

  const randomNumber = Math.random();
  const isSuccessfullyAdded = Math.round(randomNumber);

  const todoTitle = document.body.querySelector("#todo-title").value.trim();
  const todoCompleted = document.body.querySelector("#todo-completed").checked;
  const fakeBackendTodos =
    JSON.parse(localStorage.getItem(localStorageTodosName)) || []; //imk kas yra localstorage, priesingu atveju tuscais masyvas

  const newTodo = {
    title: todoTitle,
    completed: todoCompleted,
  };
  showAdditionStatus(isSuccessfullyAdded);

  localStorage.setItem(
    localStorageTodosName,
    JSON.stringify([newTodo, ...fakeBackendTodos])
  );
});
