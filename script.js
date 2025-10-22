const currentTime = document.getElementById("currentTime");


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

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const dateTime = now.toLocaleDateString('id-ID', options);
    const time = now.toLocaleTimeString('id-ID', { hour12: false });

    currentTime.innerHTML = `${dateTime} <br> ${time}`;
}

setInterval(updateTime, 1000);
updateTime();


