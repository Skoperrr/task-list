// Constants for input and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');

// Listener for the "Enter" key to add a new task
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

// Onclick event for the "Add" button
document.querySelector('#push').onclick = function () {
  createTask();
};

// Function to create a new task
function createTask() {
  if (taskInput.value.trim().length === 0) {
    alert("The task field is blank. Enter a task name and try again.");
  } else {
    taskSection.innerHTML += `
      <div class="task">
        <label id="taskname">
          <input onclick="updateTask(this)" type="checkbox" id="check-task">
          <p>${taskInput.value}</p>
        </label>
        <div class="delete">
          <i class="uil uil-trash"></i>
        </div>
      </div>`;
    
    // Optionally, clear the input field after adding a task
    taskInput.value = "";
    
    // Handle overflow styling dynamically
    if(taskSection.offsetHeight >= 300) {
      taskSection.classList.add("overflow");
    } else {
      taskSection.classList.remove("overflow");
    }
  }
}

// Function to update the task when a checkbox is clicked
function updateTask(task) {
  let taskText = task.nextElementSibling; // Gets the <p> element
  if (task.checked) {
    taskText.classList.add("checked");
  } else {
    taskText.classList.remove("checked");
  }
}

// Event delegation for deletion of tasks
taskSection.addEventListener("click", function(e) {
  if (e.target.matches(".uil-trash")) {
    // Remove the task container (parent of the trash icon)
    e.target.closest(".task").remove();
  }
});
