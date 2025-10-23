const currentTime = document.getElementById("currentTime");
const inputTodo = document.getElementById("inputTodo");
const priorityLevel = document.getElementById("priorityLevel");
const deadlineSelect = document.getElementById("deadlineSelect");
const submitBtn = document.getElementById("submitBtn");
const todoTableBody = document.getElementById("todoTable").querySelector("tbody");

function updateTime(){
    const now = new Date();

    const day = [
        'Minggu',
        'Senin', 
        'Selasa', 
        'Rabu',
        'Kamis', 
        'Jumat', 
        'Sabtu'
    ]

    const dayName = day[now.getDay()];

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const dateTime = now.toLocaleDateString('id-ID', options);
    const time = now.toLocaleTimeString('id-ID', { hour12: false });

    currentTime.innerHTML = `${dayName} ,${dateTime} <br> ${time}`;
}

setInterval(updateTime, 1000);
updateTime();

let tasks = [];

submitBtn.addEventListener("click",()=>{
    const taskText = inputTodo.value.trim();         
    const priorityValue = priorityLevel.value;       
    const deadlineValue = deadlineSelect.value;      

    if (taskText === ''){
        alert('Please input your task first!');
        return;
    }

    const task = {
        id: Date.now(),
        taskText,
        priorityValue,
        deadlineValue,
        isDone: false
    };

    tasks.push(task);

    inputTodo.value = " ";
    priorityLevel.value = "low";
    deadlineSelect.value = " ";

    renderTodos();
});

function getDeadlineStatus(deadlineValue) {
    const today = new Date();
    const deadlineDate = new Date(deadlineValue);

    if (deadlineDate < today.setHours(0,0,0,0)) {
        return "Overdue";
    } else if (deadlineDate.toDateString() === new Date().toDateString()) {
        return "Due Today";
    } else {
        return "Upcoming";
    }
}

function renderTodos() {
    todoTableBody.innerHTML = "";
    
    tasks.forEach(task => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
        <td><input type="checkbox"></td>
        <td>${task.taskText}</td>
        <td>${task.priorityValue}</td>
        <td>${task.deadlineValue}</td>
        <td>${getDeadlineStatus(task.deadlineValue)}</td>
        <td><button class="delete-btn">Delete</button></td>
        `;
        
        todoTableBody.appendChild(row);

        const deleteBtn = row.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id); 
            renderTodos(); 
        });
    });

    
    
}

