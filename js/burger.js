const menuElem = document.querySelector('.menu');
const hamburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    hamburgerElem.classList.toggle('humburger-menu-active');
};

hamburgerElem.addEventListener('click', toggleMenu);

const closeMenu = () => {
    menuElem.classList.remove('menu-active');
    hamburgerElem.classList.remove('humburger-menu-active');
};

menuElem.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('menu-list__link')) {
        closeMenu();
    }
});