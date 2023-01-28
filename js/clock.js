const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
}

getClock(); //website가 실행되자 마자 getClock을 호출시키고 
setInterval(getClock, 1000); //그후에 매 1초마다 호출한다.