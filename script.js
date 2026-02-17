document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO CARROSSEL ---
    let index = 0;
    const imagens = document.querySelectorAll('.galeria img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const galeria = document.querySelector('.galeria');

    if (imagens.length === 0) return;

    function mostrarSlide(n) {
        imagens[index].classList.remove('ativa');
        index = (n + imagens.length) % imagens.length;
        imagens[index].classList.add('ativa');
    }

    function mudarSlide(direcao) {
        mostrarSlide(index + direcao);
    }

    function mudarSlideManual(direcao) {
        clearInterval(autoPlay);
        mudarSlide(direcao);
        autoPlay = setInterval(() => mudarSlide(1), 5000);
    }

    let autoPlay = setInterval(() => mudarSlide(1), 5000);

    prevBtn.addEventListener('click', () => mudarSlideManual(-1));
    nextBtn.addEventListener('click', () => mudarSlideManual(1));

    galeria.addEventListener('mouseenter', () => clearInterval(autoPlay));
    galeria.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => mudarSlide(1), 5000);
    });

    // --- DARK MODE ---
    const btnDark = document.getElementById('toggle-dark');

    btnDark.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        btnDark.setAttribute('aria-pressed', isDark);
    });

});
