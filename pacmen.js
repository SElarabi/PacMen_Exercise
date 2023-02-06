/** @format */

var pos = 0 + "px";
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
let focus = 1;
// this is array of newpacMen
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}
// Factory to make a PacMan
function makePac() {
  // returns an object with values scaled {x: 33, y: 21}
  let velocity = {
    x: 33,
    y: 27,
  };

  // Add image to div id = game
  let game = document.getElementById("game");
  let gameRect = game.getBoundingClientRect();
  let position = setToRandom(250);
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = "./images/PacMan1.png";
  newimg.width = 100;
  newimg.style.left = position.x + gameRect.left;
  position.x = position.x + gameRect.left;
  newimg.style.top = position.y + gameRect.top;
  position.y = position.y + gameRect.top;
  let direction = 0;
  // this variable defines what direction should PacMan go into:
  // 0 = left to right
  // 1 = right to left (reverse)

  game.appendChild(newimg);

  // new style of creating an object
  return {
    position,
    velocity,
    newimg,
    direction,
  };
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    focus = (focus + 1) % 2;

    item.newimg.src = pacArray[item.direction][focus];

    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });

  setTimeout(update, 150);
}

function checkCollisions(item) {
  let game = document.getElementById("game");
  let gameRect = game.getBoundingClientRect();

  if (
    item.position.x + item.velocity.x + item.newimg.width > gameRect.right ||
    item.position.x + item.velocity.x < gameRect.left
  ) {
    item.velocity.x = -item.velocity.x;
  }

  if (
    item.position.y + item.velocity.y + item.newimg.height > gameRect.bottom ||
    item.position.y + item.velocity.y < gameRect.top
  ) {
    item.velocity.y = -item.velocity.y;
  }
  let distanceToedge = gameRect.width - item.position.x;

  if (distanceToedge < item.newimg.width + item.velocity.x) item.direction = 0;
  if (item.position.x < 0) item.direction = 1;

  //if(pos = 0- imgWidth) direction = 0 ;

  /** if(pos - pageWidth <  imgWidth){
    direction = 0;*/
}
function stop() {
  // to be determined
  pacMen.forEach((item) => {
    checkCollisions(item);
    focus = (focus + 1) % 2;

    item.newimg.src = pacArray[item.direction][focus];

    item.velocity.x = 0;
    item.velocity.y = 0;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
}
function reset() {
  // TO BE DETERMINED
}
function stop() {
  //to be determined
}
function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
