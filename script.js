function addTask() {
    // Get the input field
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim(); // FIX: Corrected property

    // Check if the user entered an empty task
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new <li> element to hold the task
    let li = document.createElement("li");

    // Create a <span> to hold the task text
    let span = document.createElement("span");
    span.textContent = taskText; 

    // Add event listener to mark task as completed when clicked
    span.addEventListener("click", function () {
        span.classList.toggle("completed"); // Toggle "completed" class for styling
    });

    // Create a delete button
    let button = document.createElement("button");
    button.innerHTML = "❌"; // Delete icon
    button.classList.add("delete-btn"); // Add class for styling

    // Add event listener to remove task when delete button is clicked
    button.addEventListener("click", function () {
        li.remove(); // Remove task from the list
    });

    // Append the span (task text) and button (delete) to the <li>
    li.appendChild(span);
    li.appendChild(button);

    // Append the new <li> to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field after adding task
    taskInput.value = "";
}

// Ensure script runs only after the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("taskInput").addEventListener("keypress", function (event) {
        // If Enter key is pressed, call addTask function
        if (event.key === "Enter") {
            addTask();
        }
    });
});
