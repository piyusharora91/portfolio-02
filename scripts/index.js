const hambergerIcon = document.getElementById("menu");
const mailValue = document.getElementById("mail-value");
const header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", () => {
  //toggle header in mobile/tablet browsers
  hambergerIcon.addEventListener("click", () => {
    hambergerIcon.classList.toggle("fa-times");
    header.classList.toggle("toggle");
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
