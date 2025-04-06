const clock = document.querySelector("h2#clock");
const dateDiv = document.querySelector("#date");

function getClock(){
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 0~11이므로 +1
    const day = String(date.getDate()).padStart(2, "0");
    dateDiv.innerText = `${year}-${month}-${day}`;

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);