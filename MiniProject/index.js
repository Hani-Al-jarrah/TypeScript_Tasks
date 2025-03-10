var tasks = JSON.parse(localStorage.getItem("Tasks") || "[]");
displayTasks();
function store() {
    var title = document.getElementById("Title").value;
    var states = document.getElementById("State").value;
    var startDate = document.getElementById("StartDate").value;
    var endDate = document.getElementById("EndDate").value;
    var newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title: title,
        states: states,
        startDate: startDate,
        endDate: endDate
    };
    tasks.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    displayTasks();
}
function displayTasks() {
    var taskList = document.getElementById("taskList");
    if (!taskList)
        return;
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.innerHTML = "Task Name :<strong>".concat(task.title, "</strong> Task Status : <strong>").concat(task.states, "</strong> Start From<strong>(").concat(task.startDate, ")</strong>   TO   <strong>(").concat(task.endDate, ")</strong>\n            <button onclick=\"editTask(").concat(task.id, ")\">Edit</button>\n            <button onclick=\"deleteTask(").concat(task.id, ")\">Delete</button>");
        taskList.appendChild(li);
    });
}
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    displayTasks();
}
function editTask(id) {
    var task = tasks.find(function (t) { return t.id === id; });
    if (!task)
        return;
    var newTitle = prompt("Edit Task Title:", task.title);
    if (newTitle !== null && newTitle !== "") {
        task.title = newTitle;
        localStorage.setItem("Tasks", JSON.stringify(tasks));
        displayTasks();
    }
}
