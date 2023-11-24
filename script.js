
// Get initial page size
var pageWidth = document.body.offsetWidth;
var pageHeight = document.body.offsetHeight;

// Get elements
const eyes = document.querySelectorAll('.eyeball');
const iggy = document.getElementById('iggy');

// Iggy position
var iggyWidth = iggy.getBoundingClientRect().width, iggyHeight = iggy.getBoundingClientRect().height;
var iggyX = iggy.getBoundingClientRect().left + iggyWidth / 2, iggyY = iggy.getBoundingClientRect().top + iggyHeight / 2;

// Initial mouse position
var x = pageWidth / 2, y = pageHeight / 2;

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

// Listen for cursor/touch movement
events.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {
        // Update page size
        pageWidth = document.body.offsetWidth;
        pageHeight = document.body.offsetHeight;

        // Cursor position from top left
        x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
        y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;

        // Move Iggy
        if ((x > iggyWidth/2) & (x < pageWidth-(iggyWidth/2)) & (y > iggyHeight/2) & (y < pageHeight-(iggyHeight/2))) {
            iggy.animate({left: `${x}px`, 
                          top: `${y}px`,
                          
                          }, 
                         {duration: 30000,  
                          fill: "forwards"});
            iggy.style.animationPlayState = "running";
        }

        eyes.forEach((eye) => {
            // Calculate eye movement
            var eyeMoveX = (eye.clientWidth * x / window.innerWidth) - (eye.clientWidth / 2);
            var eyeMoveY = (eye.clientWidth * y / window.innerHeight) - (eye.clientHeight / 2);

            // Move eye
            eye.style.transform = `translate(${eyeMoveX}px, ${eyeMoveY}px)`;
        });
    });
});


