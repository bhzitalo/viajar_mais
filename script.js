// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    /* --- Carrossel de Imagens --- */

    // Índice que controla qual imagem está ativa
    let index = 0;

    // Seleciona todas as imagens dentro da galeria
    const imagens = document.querySelectorAll('.galeria img');

    // Seleciona os botões de navegação
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // Seleciona a área da galeria (usado para controle de autoplay)
    const galeria = document.querySelector('.galeria');

    // Se não houver imagens, interrompe a execução para evitar erro
    if (imagens.length === 0) return;

    function mostrarSlide(n) {
        // Remove a classe da imagem atualmente ativa
        imagens[index].classList.remove('ativa');

        // Calcula o novo índice usando operador módulo
        // Isso permite loop infinito (volta para 0 ao chegar no fim)
        index = (n + imagens.length) % imagens.length;

        // Adiciona a classe na nova imagem ativa
        imagens[index].classList.add('ativa');
    }

    function mudarSlide(direcao) {
        mostrarSlide(index + direcao);
    }

    function mudarSlideManual(direcao) {
        clearInterval(autoPlay); // Pausa a troca automática
        mudarSlide(direcao);     // Muda o slide
        autoPlay = setInterval(() => mudarSlide(1), 3000); // Reinicia contador
    }

    // Ativa troca automática
    let autoPlay = setInterval(() => mudarSlide(1), 5000);

    // Clique dos botões
    prevBtn.addEventListener('click', () => mudarSlideManual(-1));
    nextBtn.addEventListener('click', () => mudarSlideManual(1));

    // Pausa autoplay quando o mouse entra na galeria
    galeria.addEventListener('mouseenter', () => clearInterval(autoPlay));

    // Retoma autoplay quando o mouse sai da galeria
    galeria.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => mudarSlide(1), 5000);
    });


    /* --- DARK MODE --- */

    // Seleciona o botão de alternar tema
    const btnDark = document.getElementById('toggle-dark');

    // Evento de clique no botão
    btnDark.addEventListener('click', () => {

        // Alterna a classe dark-mode no body
        const isDark = document.body.classList.toggle('dark-mode');

        // Atualiza atributo de acessibilidade (aria-pressed)
        btnDark.setAttribute('aria-pressed', isDark);
    });

});
