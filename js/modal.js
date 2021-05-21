const designElem = document.querySelector('.design-text');
const modalElem = document.querySelector('.modal');

const openModal = () => {
    modalElem.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modalElem.classList.add('hidden');
    document.body.style.overflow = '';
};

designElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('more')) {
        openModal();
    }
});

modalElem.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        closeModal();
    }
});