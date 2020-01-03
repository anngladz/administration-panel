// tabs

const tabs = document.querySelectorAll('.tab');

for (let tab of tabs) {
  tab.addEventListener('click', function () {
    tab.classList.toggle('active');
  });
}

// hamburger

const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.fa-bars');
const hamburgerIconX = document.querySelector('.fa-times');
// const sidebarMenu = document.querySelector('.sidebar ul');
// const sidebarManager = document.querySelector('.manager');


hamburger.addEventListener('click', function () {
  hamburgerIcon.classList.toggle('i-active');
  hamburgerIconX.classList.toggle('i-active');
  // sidebarMenu.classList.toggle('unactive');
  // sidebarManager.classList.toggle('unactive');
});

