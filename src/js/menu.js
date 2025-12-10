// Gestion du menu déroulant
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menuCloseBtn = document.querySelector('.menu-close-btn');

if (menuToggle && menu && menuOpen && menuClose) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menu.getAttribute('aria-hidden') === 'false';
        
        if (isOpen) {
            // Fermer le menu
            menu.setAttribute('aria-hidden', 'true');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuOpen.style.display = 'block';
            menuClose.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            // Ouvrir le menu
            menu.setAttribute('aria-hidden', 'false');
            menuToggle.setAttribute('aria-expanded', 'true');
            menuOpen.style.display = 'none';
            menuClose.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
}

// Bouton fermer dans le menu
if (menuCloseBtn && menu) {
    menuCloseBtn.addEventListener('click', () => {
        menu.setAttribute('aria-hidden', 'true');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}
