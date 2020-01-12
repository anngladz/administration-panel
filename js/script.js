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

//charts

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      // 7
      hidden: true,
    }]
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontColor: '#979797',
        usePointStyle: 'true',
      }
    }
  }
});

