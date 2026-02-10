/* FORM – dummy submit */
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form is dummy for now");
  });
});

/* MOBILE NAV */
document.querySelectorAll(".menu-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const nav = toggle.parentElement.querySelector("nav");
    nav.classList.toggle("open");
  });
});

/* AUTO CLOSE */
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = link.closest("nav");
    nav.classList.remove("open");
  });
});
