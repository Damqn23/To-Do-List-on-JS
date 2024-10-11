window.onload = function() {
    loadTasks();
};

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    if(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        taskList.innerHTML += `<li>${task} <button 
        onclick="removeTask(${index})">Remove</button></li>`;
    });
}

function removeTask(index){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    loadTasks();
}