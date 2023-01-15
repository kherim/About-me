let name = window.prompt("Adınız ne?");
function showTime(){
    let date = new Date();
    let day = "";
    let daysPerMonth = [31, 28 + !(date.getFullYear()%4), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
    let totalDays = 337 + daysPerMonth[1];
    let totalPassedDays = 0;
    
    switch (date.getDay()){
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Öarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6: 
            day = "Cumartesi";
            break;
        case 0:
            day = "Pazar";
            break
        default:
            day = "kodda bir hata var";
    }
    document.getElementById("myName").innerText = name;
    document.getElementById("myClock").innerText = (date.getHours() < 10 ? "0" + date.getHours():date.getHours())  + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes():date.getMinutes()) + ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds():date.getSeconds()) + "  " + day;
    document.getElementById("myDate").innerText = (date.getDate() < 10 ? "0" + date.getDate():date.getDate())  + "." + ((date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1):(date.getMonth()+1)) + "." + (date.getFullYear() < 10 ? "0" + date.getFullYear():date.getFullYear());

    for(let i = 0; i < date.getMonth(-1); i++){
        totalPassedDays += daysPerMonth[i];
    }
    totalPassedDays += date.getDate();
    document.getElementById("myTimePast").innerText = "Total days = " + totalDays + ". Days passed = " + totalPassedDays + ". Congratulations! You have already killed " + (100*totalPassedDays/totalDays).toPrecision(4) + "% of year " + date.getFullYear();

}
showTime();
setInterval(showTime, 1000);
