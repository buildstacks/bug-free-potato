const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const pageId = document.body.dataset.page;
const navLinks = document.querySelectorAll(".main-nav a");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");

const showAboveFoldReveals = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      item.classList.add("is-visible");
    }
  });
};

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (pageId) {
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === pageId) {
      link.classList.add("is-active");
    }
  });
}

if ("IntersectionObserver" in window) {
  showAboveFoldReveals();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert(
      "Demo-Formular: Fuer den Livegang wuerde hier die echte Formularlogik angeschlossen."
    );
  });
}
