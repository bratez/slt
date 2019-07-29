document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.header__menu-item').forEach(itm => {
        itm.addEventListener('click', ev => {
            document.querySelector('.home__' + ev.target.dataset.part).scrollIntoView({behavior: "smooth"})
        });
    });
    document.querySelectorAll('.home__scheme-block').forEach(itm => {
        itm.addEventListener('click', ev => {
            if (ev.target.querySelector('.home__scheme-block-text').classList.contains('active')) {
                ev.target.querySelector('.home__scheme-block-text').classList.remove('active')
            } else {
                document.querySelectorAll('.home__scheme-block-text.active').forEach(itm => {
                    itm.classList.remove('active');
                });
                ev.target.querySelector('.home__scheme-block-text').classList.add('active')
            } 
        });
    });
});