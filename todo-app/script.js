// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="complete">✔</button>
            <button class="edit">✏️</button>
            <button class="delete">❌</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";

    // Add event listeners for actions
    const completeButton = taskItem.querySelector(".complete");
    const editButton = taskItem.querySelector(".edit");
    const deleteButton = taskItem.querySelector(".delete");

    completeButton.addEventListener("click", () => toggleComplete(taskItem));
    editButton.addEventListener("click", () => editTask(taskItem));
    deleteButton.addEventListener("click", () => deleteTask(taskItem));
}

// Mark task as complete
function toggleComplete(taskItem) {
    taskItem.classList.toggle("completed");
}

// Edit a task
function editTask(taskItem) {
    const taskTextElement = taskItem.querySelector("span");
    const newTaskText = prompt("Edit task:", taskTextElement.textContent);

    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskTextElement.textContent = newTaskText.trim();
    }
}

// Delete a task
function deleteTask(taskItem) {
    taskItem.remove();
}