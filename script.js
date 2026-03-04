// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Scroll to Booking
function scrollToBooking(){
  document.getElementById("booking").scrollIntoView({
    behavior:"smooth"
  });
}

// Booking + Email
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let slot = document.getElementById("slot").value;
  let persons = document.getElementById("persons").value;

  let templateParams = {
    to_name: name,
    to_email: email,
    slot: slot,
    persons: persons
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(() => {

      document.getElementById("confirmationText").innerHTML =
        `Thank you <strong>${name}</strong>!<br>
         Your booking for <strong>${slot}</strong> 
         with <strong>${persons}</strong> person(s) is confirmed.<br>
         A confirmation email has been sent to ${email}.`;

      document.getElementById("successModal").style.display = "flex";
      document.getElementById("bookingForm").reset();
    })
    .catch(() => {
      alert("Email failed. Check EmailJS configuration.");
    });
});

function closeModal(){
  document.getElementById("successModal").style.display = "none";
}