// Retreive the value of the sliders 
var bankAngle = document.getElementById("bankAngle"); 
var stallSpeed = document.getElementById("stallSpeed");

// Calculate G Loading value 
var gLoad = getGLoading(bankAngle.value);

// Create variables for text elements to display values
var bankanglevalue = document.getElementById("bankanglevalue");
var stallspeedvalue = document.getElementById("currentstallspeedvalue"); 
var gloadingvalue = document.getElementById("gloadingvalue");
var newstallspeedvalue = document.getElementById("newstallspeedvalue");

// Assign values to HTML text elements 
bankanglevalue.textContent = bankAngle.value; 
stallspeedvalue.textContent = stallSpeed.value; 
gloadingvalue.textContent = gLoad; 
newstallspeedvalue.textContent = getNewStallSpeed(stallSpeed.value, gLoad);

// Calculates G Load
function getGLoading(bankAngle) {
  return 1 / Math.cos(bankAngle * (Math.PI / 180));
}

// Calculates new stall speed 
function getNewStallSpeed(currentStallSpeed, gLoad) {
  return currentStallSpeed * Math.sqrt(gLoad);
}

// Function called each time the value of the slider is changed
function update(){
// Do everything we did when we did the first time we loaded the page but with updated values
bankAngle = document.getElementById("bankAngle"); 
stallSpeed = document.getElementById("stallSpeed");
gLoad = getGLoading(bankAngle.value);
bankanglevalue = document.getElementById("bankanglevalue");
stallspeedvalue = document.getElementById("currentstallspeedvalue"); 
gloadingvalue = document.getElementById("gloadingvalue");
newstallspeedvalue = document.getElementById("newstallspeedvalue");
bankanglevalue.textContent = bankAngle.value; 
stallspeedvalue.textContent = stallSpeed.value; 
gloadingvalue.textContent = gLoad; 
newstallspeedvalue.textContent = getNewStallSpeed(stallSpeed.value, gLoad);
}