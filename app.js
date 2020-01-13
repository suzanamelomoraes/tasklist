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
  li.className = "colletion-item";
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  li.appendChild(link);

  e.preventDefault();
};
