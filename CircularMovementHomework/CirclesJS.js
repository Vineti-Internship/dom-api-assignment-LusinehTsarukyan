//DOM API part
const button = document.createElement("button");
document.body.appendChild(button);
button.className="but";
button.innerHTML = "Start";


const bigCircle = document.createElement('div');
document.body.appendChild(bigCircle);
bigCircle.setAttribute("class",'bigCircle');
const bigstyle = getComputedStyle(bigCircle);

const smallCircle = document.createElement('div');
bigCircle.appendChild(smallCircle);
smallCircle.setAttribute("ID",'smallID');
smallCircle.setAttribute("class",'smallCircle');
const smallstyle = getComputedStyle(smallCircle);

const button1 = document.createElement("button");
button1.className = "but1";
button1.innerHTML = "Stop";
document.body.appendChild(button1);

smallCircle.style.top = "-25px";
smallCircle.style.left = "75px";
//recieving data from css
const stringBigHeight = bigstyle.height;
const intBigHeight = parseInt(stringBigHeight, 10);
const stringSmallHeight = smallstyle.height;
const intSmallHeight = parseInt(stringSmallHeight, 10);

//functionality

//checking if css properties came valid
function checkonLoad(){
    if ((smallstyle.height !== smallstyle.width) || bigstyle.height !== bigstyle.width){
         alert("This is not a Circle, not what we need!");
    }
}

checkonLoad();

let t = 3/2 * Math.PI; //this variable is for not jumping at the first time
let count = 0; //this is for buttons functionality
let timeout; //this is for SetTimeout/ClearTimeout functions
button.onclick = function Start() {
  ++count;
  if(count === 1){
    moveCircular();
   }
 }

button1.onclick = function Stop() {
  count = 0;
  stopmove();      
 }
 
      
function moveCircular(){
  t = t + 0.005 //speed
  let radius = intBigHeight / 2; 
  let centerX = intBigHeight / 2 - intSmallHeight / 2; 
  let centerY = intBigHeight / 2 - intSmallHeight / 2;   
  let newLeft = centerX + (radius * Math.cos(t));
  let newTop = centerY + (radius * Math.sin(t));
  smallCircle.style.top =  newTop + "px";
  smallCircle.style.left =  newLeft + "px";
  timeout = setTimeout(function() {moveCircular();}, 0);
}

function stopmove(){
  clearTimeout(timeout); //stops the setTimeout function
}


