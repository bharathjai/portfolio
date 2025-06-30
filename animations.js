document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-section, .animate-item').forEach(el => {
        observer.observe(el);
    });
});
