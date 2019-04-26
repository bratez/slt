document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.header__menu-item').forEach(itm => {
        itm.addEventListener('click', ev => {
            document.querySelector('.home__' + ev.target.dataset.part).scrollIntoView({behavior: "smooth"})
        });
    });
});