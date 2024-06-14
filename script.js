'use strict';

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const allBtn = document.querySelectorAll('.show-modal');

const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const allModal = document.querySelectorAll('.modal');

const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelectorAll('.close');

console.log(allModal);

const openModal = function (element) {
  element.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  overlay.classList.add('hidden');

  for (let i = 0; i < allModal.length; i++) {
    if (!allModal[i].classList.contains('hidden')) {
      allModal[i].classList.add('hidden');
      break;
    }
  }
};

const closeModalSpecific = function (element) {
  overlay.classList.add('hidden');
  element.classList.add('hidden');
};

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener('click', function () {
    openModal(allModal[i]);
  });
}

for (let i = 0; i < closeModalBtn.length; i++) {
  closeModalBtn[i].addEventListener('click', function () {
    closeModalSpecific(allModal[i]);
  });
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
