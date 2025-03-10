interface Task {
    id: number;
    title: string;
    states: string;
    startDate: string;
    endDate: string;
}


let tasks: Task[] = JSON.parse(localStorage.getItem("Tasks") || "[]");
displayTasks();

function store() {
    const title = (document.getElementById("Title") as HTMLInputElement).value;
    const states = (document.getElementById("State") as HTMLInputElement).value;
    const startDate = (document.getElementById("StartDate") as HTMLInputElement).value;
    const endDate = (document.getElementById("EndDate") as HTMLInputElement).value;

   
    const newTask: Task = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        states,
        startDate,
        endDate
    };

    tasks.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(tasks));

    displayTasks();
}

function displayTasks() {
    const taskList :any  = document.getElementById("taskList");
 if (!taskList) return;
    
  taskList.innerHTML = ""; 

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `Task Name :<strong>${task.title}</strong> Task Status : <strong>${task.states}</strong> Start From<strong>(${task.startDate})</strong>   TO   <strong>(${task.endDate})</strong>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>`;
        taskList.appendChild(li);
    });
}

function deleteTask(id: number) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    displayTasks();
}

function editTask(id: number) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    const newTitle = prompt("Edit Task Title:", task.title);
    if (newTitle !== null && newTitle !== "") {
        task.title = newTitle;
        localStorage.setItem("Tasks", JSON.stringify(tasks));
        displayTasks();
    }
}
