const hambergerIcon = document.getElementById("menu");
const mailValue = document.getElementById("mail-value");
const header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", () => {
  //   $("#menu").on("click", function () {
  //     $(this).toggleClass("fa-times");
  //     $("header").toggleClass("toggle");
  //   });

  hambergerIcon.addEventListener("click", () => {
    hambergerIcon.classList.toggle("fa-times");
    header.classList.toggle("toggle");
  });

  //   $("#mail").on("click", function () {
  //     const mail_text = $("#mail span").text();
  //     if (mail_text) {
  //       navigator.clipboard
  //         .writeText(mail_text)
  //         .then(() => {
  //           alert("Mail Copied");
  //         })
  //         .catch(() => {
  //           alert("Failed To Copy Mail To Clipboard");
  //         });
  //     }
  //   });
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
