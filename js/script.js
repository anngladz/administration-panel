// tabs

const tabs = document.querySelectorAll('.tab');

for (let tab of tabs) {
  tab.addEventListener('click', function () {
    tab.classList.toggle('tab-active');
  });
}

// hamburger

const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger .fa-bars');
const hamburgerIconX = document.querySelector('.hamburger .fa-times');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', function () {
  sidebar.classList.toggle('active');
  hamburgerIcon.classList.toggle('i-active');
  hamburgerIconX.classList.toggle('i-active');
  //prevents site scrolling when the menu is active on mobile devices
  document.body.classList.toggle('fixed');
});


//modals

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

const quits = document.querySelectorAll('.quit');

for (let quit of quits) {
  quit.addEventListener('click', function () {
    openModal('#myModal');
  });
}
