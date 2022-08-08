(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu-collapse');
    
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header__menu-collapse-active');
    });
}());
