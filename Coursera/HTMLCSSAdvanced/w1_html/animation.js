let canvas = document.getElementById('my_canvas');
let context = canvas.getContext('2d');

const speed = 4; 
let position = 0; 
let moveSpeed = speed; 
let radius = 200; 

function moveBall() {
    if (position + radius > 640) {
        moveSpeed = -speed; 
    } else if (position - radius < 0) {
        moveSpeed = speed;
    }
    position += moveSpeed; 
}

function drawBall() {
    context.clearRect(0, 0, 640, 480); 

    context.fillStyle = "#62687f"; 
    context.beginPath(); 
    context.arc(position, radius, radius, 0, 2 * Math.PI); 
    context.fill(); 
}

function animate() {
    moveBall(); 
    drawBall(); 
    window.requestAnimationFrame(animate);    
}

window.requestAnimationFrame(animate);


const element = document.getElementById("test");
let start, previousTimeStamp;
let done = false;

function step(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = `translateX(${count}px)`;
    if (count === 200) done = true;
  }

  if (elapsed < 2000) {
    // Stop the animation after 2 seconds
    previousTimeStamp = timeStamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

window.requestAnimationFrame(step);