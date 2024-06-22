document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content');

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;
            const isVisible = sectionTop <= (window.innerHeight - sectionHeight / 4);

            if (isVisible) {
                section.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealSection);

    revealSection();
});

function showMessage() {
    alert("ADVERTENCIA: ¡Actualmente te encuentras visionando una versión PRELIMINAR, ten lo en cuenta! :D");
}
document.addEventListener("DOMContentLoaded", showMessage);
