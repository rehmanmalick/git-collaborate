// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  // Modal open/close logic
  const modal = document.getElementById("modal"); // fixed ID
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");

  openModal.addEventListener("click", () => { // fixed typo
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

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("work");

    if (!name || !email || !message) {
      response.textContent = "Please fill in all fields.";
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
});
