document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".btn-submit");
    const taskList = document.querySelector(".task-list");

    function saveTasksToLocalStorage(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function getTasksFromLocalStorage() {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }

    function displayTasks() {
        taskList.innerHTML = "";
        const tasks = getTasksFromLocalStorage();
        tasks.forEach((task, index) => {
            const taskItem = document.createElement("div");
            taskItem.classList.add("task-item");
            taskItem.innerHTML = `
                <h3>${task.name}</h3>
                <p>${task.desc}</p>
                <p>Deadline: ${task.deadline}</p>
                <button class="btn-delete" data-index="${index}">Hapus</button>
            `;
            taskList.appendChild(taskItem);
        });

        document.querySelectorAll(".btn-delete").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                deleteTask(index);
            });
        });
    }

    addButton.addEventListener("click", function () {
        const taskName = document.getElementById("task-name").value.trim();
        const taskDesc = document.getElementById("task-desc").value.trim();
        const taskDeadline = document.getElementById("task-deadline").value;

        if (taskName === "" || taskDesc === "" || taskDeadline === "") {
            alert("Harap isi semua kolom!");
            return;
        }

        const tasks = getTasksFromLocalStorage();
        tasks.push({ name: taskName, desc: taskDesc, deadline: taskDeadline });
        saveTasksToLocalStorage(tasks);

        displayTasks();

        document.getElementById("task-name").value = "";
        document.getElementById("task-desc").value = "";
        document.getElementById("task-deadline").value = "";
    });

    function deleteTask(index) {
        const tasks = getTasksFromLocalStorage();
        tasks.splice(index, 1); 
        saveTasksToLocalStorage(tasks);
        displayTasks();
    }

    displayTasks();
});
