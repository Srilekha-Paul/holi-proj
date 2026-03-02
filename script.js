// const form = document.getElementById("bookingForm");
// const popup = document.getElementById("successPopup");

// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   popup.classList.add("active");

//   createAbirEffect();

//   setTimeout(() => {
//     popup.classList.remove("active");
//     form.reset();
//   }, 4000);
// });

// function createAbirEffect() {
//   for(let i=0; i<50; i++) {
//     let color = document.createElement("div");
//     color.classList.add("abir");
//     document.body.appendChild(color);

//     color.style.left = Math.random() * window.innerWidth + "px";
//     color.style.background = randomColor();
//     color.style.animationDuration = (Math.random() * 3 + 2) + "s";

//     setTimeout(() => {
//       color.remove();
//     }, 5000);
//   }
// }

// function randomColor() {
//   const colors = ["#ff0080", "#ff8c00", "#40e0d0", "#ff1493", "#00ff7f"];
//   return colors[Math.floor(Math.random() * colors.length)];
// }


// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click",()=>{
  navMenu.classList.toggle("active");
});

// Scroll to Booking
function scrollToBooking(){
  document.getElementById("booking").scrollIntoView({
    behavior:"smooth"
  });
}

// Fade Animation on Scroll
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
  faders.forEach(el=>{
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if(position < screenPosition){
      el.classList.add("active");
    }
  });
});

// Booking Popup
document.getElementById("bookingForm")
.addEventListener("submit",function(e){
  e.preventDefault();
  alert("🎉 Booking Confirmed! Happy Holi 🌈");
  this.reset();
});