// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("formResponse");

  if (!name || !email || !message) {
    response.textContent = "All fields are required.";
    response.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    response.textContent = "Please enter a valid email address.";
    response.style.color = "red";
    return;
  }

  response.textContent = "Message sent successfully!";
  response.style.color = "green";
  this.reset();
});

function validateEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}
