const numObjects = 10;

// Function to generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to create a new object and animate it
function createObject() {
  const object = document.createElement('div');
  object.className = 'object';

  // Set initial position
  const initialX = getRandomNumber(0, window.innerWidth);
  const initialY = getRandomNumber(0, window.innerHeight);
  object.style.left = initialX + 'px';
  object.style.top = initialY + 'px';

  // Set random animation properties
  const duration = getRandomNumber(5, 15);
  const finalX = getRandomNumber(0, window.innerWidth);
  const finalY = getRandomNumber(0, window.innerHeight);

  // Animate the object
  object.animate(
    [
      { transform: `translate(${initialX}px, ${initialY}px)` },
      { transform: `translate(${finalX}px, ${finalY}px)` }
    ],
    {
      duration: duration * 3200,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'linear'
    }
  );

  // Append the object to the body
  document.body.appendChild(object);
}

// Create the objects
for (let i = 0; i < numObjects; i++) {
  createObject();
}