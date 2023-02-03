const hambergerIcon = document.getElementById("menu");
const mailValue = document.getElementById("mail-value");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".nav-links");

document.addEventListener("DOMContentLoaded", () => {
  //toggle header in mobile/tablet browsers with hamberger click
  hambergerIcon.addEventListener("click", () => {
    hambergerIcon.classList.toggle("fa-times");
    header.classList.toggle("toggle");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("toggle");
      hambergerIcon.classList.remove("fa-times");
    });
  });

  //copy mail functioanlity
  mailValue.addEventListener("click", () => {
    if (mailValue.textContent) {
      navigator.clipboard
        .writeText(mailValue.textContent)
        .then(() => {
          alert("Mail Copied");
        })
        .catch(() => {
          alert("Failed To Copy Mail To Clipboard");
        });
    }
  });
});
