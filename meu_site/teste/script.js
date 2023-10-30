const container = document.querySelector('.particle-container');

for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    container.appendChild(particle);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    const delay = Math.random() * 4; // Atraso aleatório para animação de partículas
    particle.style.animationDelay = `${delay}s`;
}
