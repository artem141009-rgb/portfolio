document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, once: true, offset: 50, easing: 'ease-out-cubic' });

    // Кешируем элементы один раз
    const cards = document.querySelectorAll('.card:not(.console)');
    const stream = document.getElementById('log-stream');
    const logMessages = [
        "[SYSTEM] Check memory usage...", "[OK] Memory stable",
        "[PORTFOLIO] Rendering Bento-Grid", "[CONNECT] WebSocket active",
        "[USER] Interaction detected", "[CORE] AI-Module ready"
    ];

    // Антигравитация с оптимизацией
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const windowW = window.innerWidth;
        const windowH = window.innerHeight;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;

            const distX = mouseX - cardX;
            const distY = mouseY - cardY;

            const maxMove = 15;
            const moveX = Math.min(maxMove, Math.max(-maxMove, (distX / windowW) * 20));
            const moveY = Math.min(maxMove, Math.max(-maxMove, (distY / windowH) * 20));

            card.style.transform = `translate(${-moveX}px, ${-moveY}px) rotateX(${(moveY / 10)}deg) rotateY(${(moveX / 10) * -1}deg)`;
        });
    });

    // Сброс при уходе мыши
    document.addEventListener('mouseleave', () => {
        cards.forEach(card => {
            card.style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
        });
    });

    // Логи
    setInterval(() => {
        if (stream) {
            const newLog = document.createElement('div');
            newLog.innerText = logMessages[Math.floor(Math.random() * logMessages.length)];
            stream.appendChild(newLog);
            stream.scrollTop = stream.scrollHeight;
            if (stream.childNodes.length > 6) stream.removeChild(stream.childNodes[0]);
        }
    }, 3000);
});