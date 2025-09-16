 // Toggle Mobile Menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formMessage.textContent = "✅ Thank you! Your message has been sent.";
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.textContent = "⚠️ Please fill in all fields.";
        formMessage.style.color = "red";
      }
    });
  }
});
