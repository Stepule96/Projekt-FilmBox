const menuButtonElm = document.querySelector('#menu-tlacitko');
const menuItemsElm = document.querySelector('#menu-polozky');

menuButtonElm.addEventListener('click', () => {
    menuItemsElm.classList.toggle('show');
});

