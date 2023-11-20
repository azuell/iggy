
// Get eye elements
const eyes = document.querySelectorAll('.eyeball');

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


// Same function for both mouse and touch events
events.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {
        eyes.forEach((eye) => {

            // Eye position from top left
            let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

            // Cursor position from top left
            var x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
            var y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
            
            // Calculate eye movement
            var moveX = (eye.clientWidth * x / window.innerWidth) - (eye.clientWidth / 2);
            var moveY = (eye.clientWidth * y / window.innerHeight) - (eye.clientHeight / 2);

            // Move eye
            eye.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        });
    });
});

