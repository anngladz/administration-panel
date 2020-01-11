// tabs

const tabs = document.querySelectorAll('.tab');

for (let tab of tabs) {
  tab.addEventListener('click', function () {
    tab.classList.toggle('tab-active');
  });
}

// hamburger

const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.fa-bars');
const hamburgerIconX = document.querySelector('.fa-times');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', function () {
  sidebar.classList.toggle('active');
  hamburgerIcon.classList.toggle('i-active');
  hamburgerIconX.classList.toggle('i-active');
  //prevents site scrolling when the menu is active on mobile devices
  document.body.classList.toggle('fixed');
});

