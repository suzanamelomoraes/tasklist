const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

loadEventListeners = () => {
  form.addEventListener("submit", addTask);
};

addTask = e => {
  if (taskInput.value === "") {
    alert("Please, add a task");
  }

  const li = document.createElement("li");
  li.className = "colletion-ietm";
  li.appendChild(document.createTextNode(taskInput.value));

  e.preventDefault();
};
