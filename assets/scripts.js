"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.header__menu-item').forEach(function (itm) {
    itm.addEventListener('click', function (ev) {
      document.querySelector('.home__' + ev.target.dataset.part).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
