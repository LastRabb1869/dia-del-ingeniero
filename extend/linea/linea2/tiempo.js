document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll('.container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    containers.forEach(container => {
        observer.observe(container);
    });
});