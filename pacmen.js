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
    item.focus = (item.focus + 1) % 2;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
    item.newimg.src = pacArray[item.direction][item.focus]; //display image based on direction and focus (left/right? open/closed?)
  });
  setTimeout(update, 100);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
    if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
    {item.velocity.x = -item.velocity.x;
      if (item.velocity.x > 0){item.direction=0;}
      if (item.velocity.x < 0){item.direction=1;}
    }
  if (
    item.position.y + item.velocity.y + item.newimg.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  )
    {item.velocity.y = -item.velocity.y;}

  return item.direction;
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}

// //pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
// let pageWidth = window.innerWidth;

// // This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
// let focus = 0;

// // This function is called on mouse click. Every time it is called, it updates the pacman image, position, and direction (if necessary) on the screen.
// function Run() {
//   //update pacman image
//   let img = document.getElementById('pacman');
//   let imgWidth = img.width;
//   focus = (focus + 1) % 2;  // focus flips between 0 and 1 every time Run() is called
//   direction = checkPageBounds(direction, imgWidth, pos, pageWidth); //check if the direction of pacman needs to change
//   img.src = pacArray[direction][focus]; //display image based on direction and focus (left/right? open/closed?)
  
//   //move pacman based on direction
//   if (direction) {
//     pos -= 20;  //decrease 20 px
//     img.style.left = pos + 'px';
//   } else {
//     pos += 20;  //increase 20 px
//     img.style.left = pos + 'px';
//   }
// }
// // TODO: Add a Javascript setInterval() method that will call the Run() function above every 200 milliseconds. Note: in the video, Dr. Williams uses the setTimeout() method, but here we are going to use a slightly different
// // method called setInterval(), so that you can have practice using this method.
// setInterval(Run, 200)
// // Inside of the Run() function you will also have to add an extra argument "pageWidth", which is declared on line 4 when you call the checkPageBounds() function below. 

// // This function determines the direction of PacMan based on screen edge detection. 
// function checkPageBounds(direction, imgWidth, pos, pageWidth) {
//   //
//   // TODO: Complete this to reverse direction upon hitting screen edge
//   //
//   if (direction == 1 && pos < 0)
//     direction = 0;
//   if (direction == 0 && pos + imgWidth > pageWidth)
//     direction = 1;
  
//   return direction;
// }

// //Please do not change
// module.exports = checkPageBounds;
