# PacMan Exercise
This project simulates infinite PacMen characters chomping their way up and down the window before turning around at the x limit of the browser. To make this happen, the user is given a button to create another PacMan if desired. Upon request, a new PacMan is added, pushing new data onto the end of an array that stores each PacMan's positon, velocity, direction, and focus. The main function of pacmen.js is a timed recurring function that checks each PacMan's position and determines if a collision is about to happen, then adjusts the position and velocity accordingly, stores the new position, velocity, direction, and focus data, then determines what PacMan image to display at what position, and mirrors it on the DOM.

## How to Run?
Load index.html into a local browser once index.html, pacmen.js, and ./images/pacman1, ./images/pacman2, ./images/pacman3, ./images/pacman4 are downloaded into a folder. 
Click the "Add PacMan" button to add a PacMan. Click the "Start Game" button for the PacMen to start moving about the browser window. 

## Roadmap of Future Impovements
An awesome improvement to this exercise would be for the PacMen to bounce off eachother and not only the browser limits. We can do this using momentum and equations of motion to determine the new velocity of colliding PacMen, and adjusting data to the pacArray. A wise choice may be setting a limit to the amount of PacMen that are created, for each PacMan must check for collisions with all walls and all PacMen each time the function is called.

## License Information
This exercise was created as an assignment for the MIT xPRO Full Stack Web Development program. 
