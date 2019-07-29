"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.header__menu-item').forEach(function (itm) {
    itm.addEventListener('click', function (ev) {
      document.querySelector('.home__' + ev.target.dataset.part).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  document.querySelectorAll('.home__scheme-block').forEach(function (itm) {
    itm.addEventListener('click', function (ev) {
      if (ev.target.querySelector('.home__scheme-block-text').classList.contains('active')) {
        ev.target.querySelector('.home__scheme-block-text').classList.remove('active');
      } else {
        document.querySelectorAll('.home__scheme-block-text.active').forEach(function (itm) {
          itm.classList.remove('active');
        });
        ev.target.querySelector('.home__scheme-block-text').classList.add('active');
      }
    });
  });
});
