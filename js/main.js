//cache

let runningTotalSpan = document.getElementById('total');
let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let input = document.getElementById('input');

//state
let runningTotalNum;

//event listeners

document.getElementById('buttons').addEventListener('click', clickHandler)
document.getElementById('buttons').addEventListener('hover', hoverHandler)

//interaction handlers

function clickHandler (evt) {
    if (evt.target.id === 'plus') {
        //console.log(input.value)
        runningTotalNum += parseInt(input.value);

    } else if (evt.target.id === 'minus') {
        runningTotalNum -= parseInt(input.value);
    }
    render();
}

function hoverHandler (evt) {
    
}

//init
init();

function init() {
    runningTotalNum = 1;

    render();
}

//render
function render() {
    runningTotalSpan.innerText = runningTotalNum;
    if (runningTotalNum <= 0) {
        runningTotalSpan.style.color = 'red';
    } else {
        runningTotalSpan.style.color = 'green';
    }
}