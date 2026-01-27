// Moure titol a barra //
window.addEventListener('scroll', () => {
    document.querySelector("header .titol-header").style.opacity = window.scrollY > 150 ? 1 : 0
});
