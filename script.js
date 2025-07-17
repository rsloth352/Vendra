// Toggle dark/light mode
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Prevent form submit (you can replace with real logic later)
document.querySelector(".email-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! We'll notify you when Vendra™ is ready.");
});
