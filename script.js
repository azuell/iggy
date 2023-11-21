
// Iggy position and offset
var iggyX = window.innerWidth / 2, iggyY = window.innerHeight / 2;
var iggyImg = document.getElementsByClassName('iggy-img')[0];
var leftOffset = iggyImg.width / 2 * -1;
var topOffset = iggyImg.height / 2 * -1;

// Mouse position
var x = window.innerWidth / 2, y = window.innerHeight / 2;
console.log(x, y);

// Get elements
const eyes = document.querySelectorAll('.eyeball');
const iggy = document.getElementById('iggy');


// Both mouse and touch screen
const events = ["mousemove", "touchmove"];

// Check for touch screen
function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}


// Move eyes
events.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {

        // Cursor position from top left
        x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
        y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;


        eyes.forEach((eye) => {
            // Calculate eye movement
            var eyeMoveX = (eye.clientWidth * x / window.innerWidth) - (eye.clientWidth / 2);
            var eyeMoveY = (eye.clientWidth * y / window.innerHeight) - (eye.clientHeight / 2);

            // Move eye
            eye.style.transform = `translate(${eyeMoveX}px, ${eyeMoveY}px)`;
        });
    });
});


// Move Iggy
setInterval(function(){
    iggyX += ((x - iggyX) / 6);
    iggyY += ((y - iggyY) / 6);

    iggy.style.left = `${iggyX + leftOffset}px`;
    iggy.style.top = `${iggyY + topOffset}px`;
  }, 50);

