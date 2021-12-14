//pacArray contains all the pacman images needed to demonstrate movement (right open, right closed, left open, left closed)
const pacArray = [
  ['./images/pacman1.png', './images/pacman2.png'],
  ['./images/pacman3.png', './images/pacman4.png'],
];
const pacMen=[]; //an array to store our Pacmen

// pos is the PacMan image position variable- it is set to 0 initially
let pos = 0;
//focus dictates open mouth or closed 
let focus = 0;

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
let direction = 0;

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: ##, y: ##}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);
  let focus = 0;
  let direction = 0;

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/pacman1.png';
  newimg.width = 100;

  // set position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  // add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    focus,
    direction,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.focus = (item.focus + 1) % 2;  //alternates between 0 and 1 to represent open and closed mouth

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
    item.newimg.src = pacArray[item.direction][item.focus]; //display image based on direction and focus (left/right? open/closed?)
  });
  setTimeout(update, 100);
}

//detects collisions with all walls and makes pacman bounce
function checkCollisions(item) {
  //if it reaches the y-limits of the page  
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
    {item.velocity.x = -item.velocity.x;
      if (item.velocity.x > 0){item.direction=0;}
      if (item.velocity.x < 0){item.direction=1;}
     //reverse x velocity and indicate direction change
    }
  
  //if it reaches the y-limits of the page
  if (
    item.position.y + item.velocity.y + item.newimg.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  )
    {item.velocity.y = -item.velocity.y;}
    //reverse y velocity
  return item.direction;
}

//makeOne will add a new PacMan to the end of the pacMen array using .push
function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
