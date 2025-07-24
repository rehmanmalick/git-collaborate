// Modal open/close logic
const modal = document.getElementById("modl");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("clic", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Form validation
const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email || !validateEmail(email)) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you for subscribing!";
    formMessage.style.color = "green";
    emailInput.value = "";
    setTimeout(() => {
      modal.style.display = "none";
      formMessage.textContent = "";
    }, 1500);
  }
});

function validateEmail(email) {
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email);
}
