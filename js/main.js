document.querySelectorAll(".nav-toggle").forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    var navLinks = toggle.closest(".navbar").querySelector(".nav-links");
    var isOpen = navLinks.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });
});

// Intake form is a placeholder: validate locally and show a confirmation
// without sending anything anywhere.
document.querySelectorAll(".intake-form").forEach(function (form) {
  var status = form.querySelector(".form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var firstInvalid = null;
    form.querySelectorAll("[required]").forEach(function (field) {
      var valid = field.checkValidity();
      var wrapper = field.closest(".form-field, .form-consent");
      wrapper.classList.toggle("invalid", !valid);
      if (!valid && !firstInvalid) firstInvalid = field;
    });

    status.hidden = false;
    if (firstInvalid) {
      status.classList.add("error");
      status.textContent = "Please complete the required fields.";
      firstInvalid.focus();
      return;
    }

    status.classList.remove("error");
    status.textContent =
      "Thank you! Your intake form has been received. Our team will be in touch soon.";
    form.reset();
  });
});
