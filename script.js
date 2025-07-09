document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    const cardBack = document.querySelector('.card-back');
    const btnOpen = document.querySelector('.btn-open');

    btnOpen.addEventListener('click', function() {
        cardBack.classList.add('active');
        cardContainer.style.transform = 'rotateY(180deg)';
        createHearts();
        this.style.display = 'none';

        // opcional: tocar som suave
        // document.getElementById('openSound').play();
    });

    cardBack.addEventListener('click', function() {
        cardBack.classList.remove('active');
        cardContainer.style.transform = '';
        btnOpen.style.display = 'block';

        // Remover corações existentes
        document.querySelectorAll('.heart').forEach(heart => heart.remove());
    });

    function createHearts() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.classList.add('heart');

                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';

                const size = Math.random() * 20 + 10;
                heart.style.fontSize = size + 'px';

                const duration = Math.random() * 3 + 2;
                heart.style.animationDuration = duration + 's';

                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);

                cardBack.appendChild(heart);
            }, i * 300);
        }
    }
});
