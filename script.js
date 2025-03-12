document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
  document.getElementById("todo-list").appendChild(taskItem);

  taskInput.value = "";
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
