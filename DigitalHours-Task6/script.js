let clock = document.getElementById("clock");
let content = document.getElementById("cont");
let dayPrint = document.getElementById("day");

const dayList =["Sunday ","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function updateClock() {
    let date = new Date();
    let day = dayList[date.getDay()];
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
console.log(day);
    

    // تنسيق الأرقام لإضافة صفر أمام الأرقام المفردة
    const formattedHours = hour.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    content.innerHTML = `
     ${formattedHours}:${formattedMinutes}:${formattedSeconds}
    `;

    dayPrint.textContent = `Day : ${day}`;
}
setInterval(updateClock, 1000);



