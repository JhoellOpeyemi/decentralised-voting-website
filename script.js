const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");
const successMessage = document.querySelector(".success-message");
const formBtn = document.querySelector(".form-btn");

let num = 0;
hamburger.addEventListener("click", () => {
  num++;
  headerNav.classList.toggle("open");
  if (num % 2 === 1) {
    hamburger.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
  }
});

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  successMessage.classList.add("open");
});
