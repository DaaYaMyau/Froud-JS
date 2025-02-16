document.addEventListener("DOMContentLoaded", function() {
    const ToScreenTwo = document.querySelector('.cow');
    const firstscreen = document.querySelector('.firstscreen');
    const secondscreen = document.querySelector('.secondscreen');
    const logo = document.querySelector('.logo');

    ToScreenTwo.addEventListener('click', function () {
        if (window.getComputedStyle(secondscreen).display === 'none') {
            firstscreen.style.display = 'none';
            secondscreen.style.display = 'flex';
        }
    });

    logo.addEventListener('click', function () {
        if (window.getComputedStyle(secondscreen).display === 'none') {
            firstscreen.style.display = 'none';
            secondscreen.style.display = 'flex';
        }
    });

    let isDragging = false;
let startX, startY, bgPosX = 0, bgPosY = 0;

const secondBG = document.querySelector(".secondscreen");
const points = document.querySelectorAll(".points"); 

const imgWidth = 750;
const imgHeight = 1400;

const viewWidth = secondBG.clientWidth;
const viewHeight = secondBG.clientHeight;

points.forEach(item => {
    item.dataset.originalX = item.offsetLeft;
    item.dataset.originalY = item.offsetTop;
});

secondBG.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    secondBG.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    
    let Xcoor = e.clientX - startX;
    let Ycoor = e.clientY - startY;

    let newBgPosX = bgPosX + Xcoor;
    let newBgPosY = bgPosY + Ycoor;
    

    const maxX = 0;
    const minX = viewWidth - imgWidth;
    if (newBgPosX > maxX) newBgPosX = maxX;
    if (newBgPosX < minX) newBgPosX = minX;

    const maxY = 0;
    const minY = viewHeight - imgHeight;
    if (newBgPosY > maxY) newBgPosY = maxY;
    if (newBgPosY < minY) newBgPosY = minY;

    bgPosX = newBgPosX;
    bgPosY = newBgPosY;

    secondBG.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;

    points.forEach(item => {
        let pointsX = parseInt(item.dataset.originalX) + bgPosX;
        let pointsY = parseInt(item.dataset.originalY) + bgPosY;
        item.style.transform = `translate(${bgPosX}px, ${bgPosY}px)`;
    });

    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    secondBG.style.cursor = "grab";
});


const FromApple = document.querySelector('.applemain');
const ThirdScreen_FirstStep = document.querySelector('.ThirdScreen_FirstStep')

FromApple.addEventListener('click', function () {
    if (window.getComputedStyle(ThirdScreen_FirstStep).display === 'none') {
        secondscreen.style.display = 'none';
        ThirdScreen_FirstStep.style.display = 'flex';
    }
});





});