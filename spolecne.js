//Hamburger menu

const menuButtonElm = document.querySelector('#menu-tlacitko');
const menuItemsElm = document.querySelector('#menu-polozky');

menuButtonElm.addEventListener('click', () => {
    menuItemsElm.classList.toggle('show');

    if (menuItemsElm.classList.contains('show')){
        menuButtonElm.innerHTML = '<i class="fas fa-xmark"></i>'
    } else{
        menuButtonElm.innerHTML = '<i class="fas fa-bars"></i>'
    }
     
});

