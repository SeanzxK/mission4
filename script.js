const currentTime = document.getElementById("currentTime");
const inputTodo = document.getElementById("inputTodo");
const priorityLevel = document.getElementById("priorityLevel");
const deadlineSelect = document.getElementById("deadlineSelect");
const submitBtn = document.getElementById("submitBtn");

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
});


