const newtask = document.getElementById("newtask");
const addtask = document.getElementById("addtask");
const tasks = document.getElementById("tasks");

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (newtask.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // Corrected here
    const remove = document.createElement("img");
    remove.src = "remove.png";
    remove.alt = "Remove";

    label.appendChild(checkbox);

    const taskText = document.createTextNode(" " + newtask.value); 
    label.appendChild(taskText);

    li.appendChild(label);
    li.appendChild(remove);

    remove.addEventListener("click", () => {
        tasks.removeChild(li);
    });

    checkbox.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    tasks.appendChild(li);
    newtask.value = "";
});