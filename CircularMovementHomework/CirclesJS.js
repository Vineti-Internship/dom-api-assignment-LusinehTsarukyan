//DOM API part
let button = document.createElement("button");
button.className = "but";
button.innerHTML = "Start";
document.body.appendChild(button);

let bigCircle = document.createElement('div');
document.body.appendChild(bigCircle);
bigCircle.setAttribute("class", 'bigCircle');

let smallCircle = document.createElement('div');
bigCircle.appendChild(smallCircle);
smallCircle.setAttribute("ID", 'smallID');
smallCircle.setAttribute("class", 'smallCircle');

let button1 = document.createElement("button");
button1.className = "but1";
button1.innerHTML = "Stop";
document.body.appendChild(button1);

//functionality

let t = 300; //this variable is for angle, 300 is for not jumping at the first time
let count = 0; //this is for buttons functionality
button.onclick = function Start() {
    ++count;
    if (count === 1)
        moveCircular(t);
}

button1.onclick = function Stop() {
    count = 0;
    stopmove();
}

let timeout;
function moveCircular() {

    t = t + 0.005 //speed
    let _r = 100; //radius
    let _x = 75;  // x coordinate 
    let _y = 75;  // y coordinate 
    let newLeft = _x + (_r * Math.cos(t));
    let newTop = _y + (_r * Math.sin(t));
    smallCircle.style.top = newTop + "px";
    smallCircle.style.left = newLeft + "px";

    timeout = setTimeout(function () { moveCircular(); }, 0);
}

function stopmove() {
    clearTimeout(timeout); //stops the setTimeout function
}






