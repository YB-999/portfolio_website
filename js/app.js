const parallax_el = document.querySelectorAll(".parallax");
let xValue = 0, yValue = 0;

let rotateDegree = 0;

function update(cursorPosition){
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2? 1 : -1;
    let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;


    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + 
      ${-yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
  });
}

update(0);

window.addEventListener("mousemove", (e) => {
  if(timeline.isActive()) return;
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX - window.innerWidth / 2);
});


//GSAP Animation

let timeline = gsap.timeline();

Array.from(parallax_el)
  .filter((el) => !el.classList.contains("text"))
  .forEach(el => {
    timeline.from(el, {
      top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
      duration: 3.5,
      ease: "power3.out",
    }, "1");
});

timeline.from(".text h1", {
  y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
  duration: 2,
}, "2.5"
).from(".text h2", 
  {
    y: 150,
    opacity: 0,
    duration: 1.5,
  },
"3"
).from(".hide", {
    opacity: 0,
    duration: 1.5,
  },
  "3"
);


//Splash Screen
document.addEventListener("DOMContentLoaded", function() {
  // Show splash screen
  document.getElementById("splash").style.display = "flex";

  // Simulate loading time
  setTimeout(function() {
    // Hide splash screen
    document.getElementById("splash").style.display = "none";

    // Show main content
    document.getElementById("main-content").style.display = "block";
  }, 2000); // Change the timeout value (in milliseconds) to adjust the duration of the splash screen
});



//button start the journey
var delayInMilliseconds = 5000;
function showButton() {
  var button = document.getElementById("myButton");
  button.classList.add("visible");
  button.classList.remove("hidden");
}
setTimeout(showButton, delayInMilliseconds);