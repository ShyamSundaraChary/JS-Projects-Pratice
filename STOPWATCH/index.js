const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

/**
 * Start the stopwatch. If the stopwatch is not running, this function will
 * start it by setting the start time to the current time minus the elapsed
 * time, and setting an interval to call the update function every 10ms.
 * @function start
 */
function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

/**
 * Stop the stopwatch. If the stopwatch is currently running, this function 
 * will clear the interval timer, calculate the elapsed time, and set the 
 * running state to false.
 */

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

/**
 * Reset the stopwatch. This function will clear the interval timer, reset the
 * start time and elapsed time to 0, set the running state to false, and
 * update the display to "00:00:00:00".
 * @function reset
 */

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00:00";
}

function update(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
