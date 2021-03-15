function myFun(){
    const newDate = new Date();
    let seconds = newDate.getSeconds()/60;
    let minutes =(seconds + newDate.getMinutes())/60;
    let hours = (minutes + newDate.getHours())/12;
    const secondHand = document.querySelector('.second-hand'),
        minuteHand = document.querySelector('.minute-hand'),
        hourHand = document.querySelector('.hour-hand');
    setTrans(secondHand, seconds);
    setTrans(minuteHand, minutes);
    setTrans(hourHand, hours);
}
function setTrans(element, handRatio){
    element.style.setProperty('--rot', `${handRatio}*360`)
}
setInterval(myFun, 1000);
myFun();