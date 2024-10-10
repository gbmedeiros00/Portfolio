window.onscroll = function() {
    const botao = document.querySelector('.topo button');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botao.style.display = "block"; // Mostrar o botão
    } else {
        botao.style.display = "none"; // Esconder o botão
    }
};