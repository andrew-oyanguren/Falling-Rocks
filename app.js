// ===== Variables =====

// Run new resetInput() on window.onload

// grid vaiables:
const inputGrid = document.getElementById('inputGrid');
const outputGrid = document.getElementById('outputGrid');
const inputGridBoxes = Array.from(inputGrid.children);
const outputGridBoxes = Array.from(outputGrid.children);

// output button, restart button
const showOutputBtn = document.getElementById('showOutputBtn');
const restartBtn = document.querySelector('.restart-btn');

// rock, stack, and table
const rock = '.';
const stack = ':';
const table = 'T';

// create a random number length of grid
const randomNumber = Math.floor(Math.random() * inputGridBoxes.length); 

// set 9 Rocks at random indexes
outputGridBoxes.forEach(function(box, index) {
  index = randomNumber;
  box.innerText = rock;
})

/* Still working on how to loop randomly through an array's
index and only changing 9 index values before breaking, 
without it being a repetitive incrementation of 3. */

/* conditionals  RULES: */

/*
1. If current box value and next sibling box value are both "rock", return "stack" (:) in last sibling.
2. Remove previous sibling 'rock' value;

3. if current box value is "rock" and next sibling value is "stack", keep "rock" value of previous sibling.

3. if next sibling box value is a "table" keep "rock" value of previous sibling.
*/


// ===== Event Listeners ===== 
showOutputBtn.addEventListener('click', showOutput);
restartBtn.addEventListener('click', resetInput);



// ===== Functions =====

// Toggle Output
function showOutput() {
  outputGrid.classList.toggle('output');
}

// Add Table
function addTable() {
  inputGridBoxes[randomNumber].innerText = table;
}

// Reset Input Grid
function resetInput() {
  if(!inputGridBoxes.innerText === '') {
    inputGridBoxes[''];
    addTable();
  }
  addTable();
}