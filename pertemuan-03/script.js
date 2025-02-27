document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".btn-submit");
    const taskList = document.querySelector(".task-list");

    addButton.addEventListener("click", function () {
        const taskName = document.getElementById("task-name").value.trim();
        const taskDesc = document.getElementById("task-desc").value.trim();
        const taskDeadline = document.getElementById("task-deadline").value;

        if (taskName === "" || taskDesc === "" || taskDeadline === "") {
            alert("Harap isi semua kolom!");
            return;
        }

        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <h3>${taskName}</h3>
            <p>${taskDesc}</p>
            <p>Deadline: ${taskDeadline}</p>
            <button class="btn-delete">Hapus</button>
        `;

        const deleteButton = taskItem.querySelector(".btn-delete");
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);

        document.getElementById("task-name").value = "";
        document.getElementById("task-desc").value = "";
        document.getElementById("task-deadline").value = "";
    });

    document.querySelectorAll(".btn-delete").forEach(button => {
        button.addEventListener("click", function () {
            button.parentElement.remove();
        });
    });
});
