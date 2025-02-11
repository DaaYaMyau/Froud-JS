document.addEventListener("DOMContentLoaded", function() {
    const ToScreenTwo = document.querySelector('.cow');
    const firstscreen = document.querySelector('.firstscreen');
    const secondscreen = document.querySelector('.secondscreen');

    ToScreenTwo.addEventListener('click', function () {
        if (window.getComputedStyle(secondscreen).display === 'none') {
            firstscreen.style.display = 'none';
            secondscreen.style.display = 'flex';
        }
    });
});