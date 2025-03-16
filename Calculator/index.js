const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
        // const result = Function('"use strict";return (' + display.value + ')')();
        // display.value = result.toString();
    }
    catch(error){
        display.value = "Error";
    }
}

