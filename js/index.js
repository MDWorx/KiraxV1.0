// index.js

// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const currentTheme = document.body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", newTheme);
    });
  }

  // Form submission with basic validation
  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      // Basic validation
      const pickup = document.getElementById("pickupLocation").value.trim();
      const pickupDate = document.getElementById("pickupDateTime").value;
      const returnDate = document.getElementById("returnDateTime").value;

      if (!pickup || !pickupDate || !returnDate) {
        e.preventDefault();
        alert("Please fill in all required fields.");
        return;
      }

      // Set form action to endpoint
      form.action = CONFIG.FORM_ENDPOINT;
      
      // Let the form submit silently to hidden iframe
      setTimeout(() => {
        window.location.href = "vehicle-selection.html";
      }, 1000);
    });
  }
});
