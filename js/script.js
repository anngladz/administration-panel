// tabs

const tabs = document.querySelectorAll('.tab');

for (let tab of tabs) {
  tab.addEventListener('click', function () {
    tab.classList.toggle('active');
  });
}

// hamburger

const hamburgers = document.querySelectorAll('.hamburger');
const hamburgerIcon = document.querySelectorAll('.hamburger .fa-bars');
const hamburgerIconX = document.querySelectorAll('.hamburger .fa-times');
const sidebar = document.querySelector('.sidebar');

for (let hamburger of hamburgers) {
  hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('unactive');

    for (let icon of hamburgerIcon) {
      icon.classList.toggle('i-active');
    }

    for (let iconX of hamburgerIconX) {
      iconX.classList.toggle('i-active');
    }
  });
}
