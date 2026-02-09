/* ===============================
   1️⃣ FORM – dummy submit
   =============================== */
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form is dummy for now");
  });
});


/* ===============================
   2️⃣ MOBILE NAV – hamburger toggle
   =============================== */
document.querySelectorAll(".menu-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const nav = toggle.parentElement.querySelector("nav");
    nav.classList.toggle("open");
  });
});


/* ===============================
   3️⃣ MOBILE NAV – auto close on link click
   (UX clean ho jata hai)
   =============================== */
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = link.closest("nav");
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  });
});


/* ===============================
   4️⃣ SAFETY – close menu on resize
   (mobile → desktop bug avoid)
   =============================== */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".navbar nav").forEach(nav => {
      nav.classList.remove("open");
    });
  }
});