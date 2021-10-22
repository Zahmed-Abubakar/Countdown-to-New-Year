let daysEl = document.getElementById('days');
let hourEl = document.getElementById('hour')
let minuteEl = document.getElementById('minute')
let secondsEl = document.getElementById('seconds')

let newYear = '1 January 2022';


function countDown(){
    let newYearDate = new Date(newYear);
    let curentDate = new Date();

    let totalSecond = (newYearDate - curentDate)/1000;

    let days = Math.floor(totalSecond / 3600 / 24) ;
    let hours = Math.floor(totalSecond / 3600 ) % 24 ;
    let mins = Math.floor(totalSecond / 60 ) % 60 ;
    let seconds = Math.floor(totalSecond ) % 60 ;

    daysEl.innerHTML = format(days);
    hourEl.innerHTML = format(hours);
    minuteEl.innerHTML = format(mins);
    secondsEl.innerHTML = format(seconds);

}
setInterval(countDown,1000);

function format(time){
    return time < 10 ? `0${time}` : time ;
}


















