let lastScrollTop = 0; // Armazena a posição do scroll anterior
const header = document.querySelector('.header'); // Seleciona o header

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Quando o usuário está rolando para baixo
        header.style.top = '-18%'; // Esconde o header (ajuste conforme a altura do header)
    } else {
        // Quando o usuário está rolando para cima
        header.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Impede valores negativos no topo
});