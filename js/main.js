document.querySelectorAll(".nav-toggle").forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    var navLinks = toggle.closest(".navbar").querySelector(".nav-links");
    var isOpen = navLinks.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });
});
