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

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const dropdowns = document.querySelectorAll('.dropdown-content');
    let activeDropdown = null;

    const toggleButton = document.createElement('button');
    toggleButton.innerText = '☰';
    toggleButton.classList.add('navbar-toggle');

    document.querySelector('.head').insertBefore(toggleButton, navbar);

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('show');
        toggleButton.classList.toggle('open');
        toggleButton.innerText = navbar.classList.contains('show') ? 'X' : '☰';
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navbar.classList.remove('show');
            toggleButton.classList.remove('open');
            toggleButton.innerText = '☰';
        }
    });

    document.querySelectorAll('.dropdown > button').forEach(dropdownButton => {
        dropdownButton.addEventListener('click', function () {
            const currentDropdown = this.nextElementSibling;

            if (activeDropdown && activeDropdown !== currentDropdown) {
                activeDropdown.classList.remove('show');
            }

            currentDropdown.classList.toggle('show');
            activeDropdown = currentDropdown.classList.contains('show') ? currentDropdown : null;
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown > button')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
            activeDropdown = null;
        }
    });

    document.querySelector('.head').addEventListener('click', function (event) {
        event.stopPropagation();
    });

    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const confirmLinks = document.querySelectorAll('.confirm-link');

    confirmLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const userConfirmed = confirm('ADVERTENCIA: Serás redirigido a otra página, ¿Estás seguro?');
            if (!userConfirmed) {
                event.preventDefault();
            }
        });
    });
});
