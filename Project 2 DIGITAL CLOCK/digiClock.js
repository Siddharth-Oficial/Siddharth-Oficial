
// clock logical engine

setInterval(()=>{

    let timeFormat = new Date();
    let hrs = timeFormat.getHours();
    let min = timeFormat.getMinutes();
    let sec = timeFormat.getSeconds();

    let hrsRotation = (30*hrs) + (min/2);
    let minRotation = 6 * min;
    let secRotation = 6 * sec;
    
    let targetHrs = document.querySelector(".nodeHrs");
    let targetMin = document.querySelector(".nodeMin");
    let targetSec = document.querySelector(".nodeSec");

    targetHrs.style.rotate = `${hrsRotation}deg`;
    targetMin.style.rotate = `${minRotation}deg`;
    targetSec.style.rotate = `${secRotation}deg`;

    if(hrs > 12){
        document.querySelector(".pm").style.color = "#fff";
        document.querySelector(".am").style.color = "transparent";
    }
    else{
        document.querySelector(".pm").style.color = "transparent";
        document.querySelector(".am").style.color = "#fff";
    }

}, 1000)

