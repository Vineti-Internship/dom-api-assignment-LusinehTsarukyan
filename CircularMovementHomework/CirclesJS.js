//DOM API part
let button = document.createElement("button");
button.className="but";
button.innerHTML = "Start";
document.body.appendChild(button);

let bigCircle = document.createElement('div');
document.body.appendChild(bigCircle);
bigCircle.setAttribute("class",'bigCircle');

let smallCircle = document.createElement('div');
bigCircle.appendChild(smallCircle);
smallCircle.setAttribute("ID",'smallID');
smallCircle.setAttribute("class",'smallCircle');

let button1 = document.createElement("button");
button1.className = "but1";
button1.innerHTML = "Stop";
document.body.appendChild(button1);

smallCircle.style.top = "-25px";
smallCircle.style.left = "75px";

//functionality

let t = 3/2 * Math.PI; //this variable is for not jumping at the first time
let count = 0; //this is for buttons functionality
button.onclick = function Start() {
  ++count;
  if(count === 1)
     moveCircular();
}

button1.onclick = function Stop() {
  count = 0;
  stopmove();  
}
 
let timeout;
function moveCircular(){
      
      t = t + 0.005 //speed
      let radius = 100; 
      let centerX = 75; //100 - 25  
      let centerY = 75; //100 - 25  
      let newLeft = centerX + (radius * Math.cos(t));
      let newTop = centerY + (radius * Math.sin(t));
      smallCircle.style.top =  newTop + "px";
      smallCircle.style.left =  newLeft + "px";
  
      timeout = setTimeout(function() {moveCircular();}, 0);
}

function stopmove(){
   clearTimeout(timeout); //stops the setTimeout function
}







