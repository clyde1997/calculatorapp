function display(value){

    document.getElementById('displayNum').value += value;

    return value;

}

function solve(){

    let result = document.getElementById('displayNum').value;
    let numSolve = eval(result);

    document.getElementById('displayNum').value = numSolve;

    return numSolve;

}

function clearScreen(){

    let display = document.getElementById('displayNum').value = "";

    return display;

}

function erase(){

    let screen = document.getElementById('displayNum');

    screen.value = screen.value.slice(0, -1);


}