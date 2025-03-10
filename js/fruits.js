document.addEventListener("DOMContentLoaded", function () {
    const fruits = document.querySelectorAll(".fruit");

    fruits.forEach(fruit => {
        let maxX = window.innerWidth - fruit.clientWidth;
        let maxY = window.innerHeight - fruit.clientHeight;
        
        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;
        let randomRotation = Math.random() * 30 - 15; // Поворот от -15° до 15°
        let randomZ = Math.floor(Math.random() * 10) + 1; // z-index от 1 до 10

        fruit.style.left = `${randomX}px`;
        fruit.style.top = `${randomY}px`;
        fruit.style.transform = `rotate(${randomRotation}deg)`;
        fruit.style.zIndex = randomZ;
    });
});