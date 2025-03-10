/*
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const body = accordion.querySelector('.accordion-body');
    header.addEventListener('click', () => {
        body.classList.toggle('active');
    });
});
*/

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const body = accordion.querySelector('.accordion-body');
    header.addEventListener('click', () => {
        // Cerrar todos los acordeones
        accordions.forEach(item => {
            const itemBody = item.querySelector('.accordion-body');
            if (item !== accordion) {
                itemBody.classList.remove('active');
            }
        });
        
        // Alternar el acordeón actual
        body.classList.toggle('active');
    });
});