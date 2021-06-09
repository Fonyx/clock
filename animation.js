// @ts-check
function showTime() {
    // get current time
    let currentTime = new Date();     

    // set current time to innerText of the myClock div
    document.getElementById("myClock").innerText = currentTime.toLocaleTimeString();

    setTimeout(showTime, 200);
    
};