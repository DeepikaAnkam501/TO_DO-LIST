 function addTask() {
      let taskInput = document.getElementById("taskInput");
      let taskValue = taskInput.value.trim();
      if (taskValue === "") {
        alert("Please enter a task!");
        return;
      }

      let li = document.createElement("li");
      li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskValue}</span>
        <button class="delete" onclick="deleteTask(this)">X</button>
      `;
      document.getElementById("taskList").appendChild(li);

      taskInput.value = "";
    }

    function toggleComplete(task) {
      task.parentElement.classList.toggle("completed");
    }

    function deleteTask(button) {
      button.parentElement.remove();
    }