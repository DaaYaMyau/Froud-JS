// window.addEventListener('load', function () {
//     var preloader = document.getElementById('preloader');
//     preloader.style.display = 'none';
//     console.log("preloader closed")
//   });

document.addEventListener("DOMContentLoaded", function () {
    const site = sessionStorage.getItem('CurrentSession') ? sessionStorage.getItem('CurrentSession') : 'firstscreen';
    const ToScreenTwo = document.querySelector('.cow');
    const firstscreen = document.querySelector('.firstscreen');
    const secondscreen = document.querySelector('.secondscreen');
    const ThirdScreen_FirstStep = document.querySelector('.ThirdScreen_FirstStep')
    const NotMainScreen = document.querySelectorAll('.NotMainScreen')
    const logo = document.querySelector('.logo');
    const Back_cow = document.querySelector('.back_cow')
    const FromMilk = document.querySelector('.milk');
    const First_FindGame = document.querySelector('.First_FindGame')
    
    const Button_FindGame_First = document.querySelector('.start')
    const Modal_Find_First = document.querySelector('.Modal_Find_First')

    if (site === 'firstscreen') {
        firstscreen.style.display = 'flex';
    } else if (site === 'secondscreen') {
        secondscreen.style.display = 'flex';
    } else if (site === 'ThirdScreen_FirstStep') {
        ThirdScreen_FirstStep.style.display = 'flex';
    } else if (site === 'First_FindGame') {
        First_FindGame.style.display = 'flex';
    } else if (site === 'ThreeD_First') {
        ThreeD_First.style.display = 'flex';
    } else if (site === 'ThreeD_Second') {
        ThreeD_Second.style.display = 'flex';
    }

    ToScreenTwo.addEventListener('click', function () {
        if (window.getComputedStyle(secondscreen).display === 'none') {
            firstscreen.style.display = 'none';
            secondscreen.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'secondscreen')
        }
    });

    logo.addEventListener('click', function () {
        if (window.getComputedStyle(secondscreen).display === 'none') {
            NotMainScreen.forEach((GetNone) => {
                GetNone.style.display = 'none';
            })
            secondscreen.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'secondscreen')
        } else {
            firstscreen.style.display = 'flex';
            secondscreen.style.display = 'none';
            sessionStorage.setItem('CurrentSession', 'firstscreen')
        }
    });

    if (window.getComputedStyle(secondscreen).display === 'flex') {
        let isDragging = false;
        let startX, startY, bgPosX = 0, bgPosY = 0;
    
        const secondBG = document.querySelector(".secondscreen");
        const points = document.querySelectorAll(".points");
    
        const imgWidth = 300;
        const imgHeight = 900;
    
        const viewWidth = 0;
        const viewHeight = 0;
        
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
                let pointsX = bgPosX;
                let pointsY = bgPosY;
                item.style.transform = `translate(${pointsX}px, ${pointsY}px)`;
            });

            startX = e.clientX;
            startY = e.clientY;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            secondBG.style.cursor = "grab";
        });
    };

    const FromApple = document.querySelector('.applemain');

    FromApple.addEventListener('click', function () {
        if (window.getComputedStyle(ThirdScreen_FirstStep).display === 'none') {
            secondscreen.style.display = 'none';
            ThirdScreen_FirstStep.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThirdScreen_FirstStep')
        }
    });


    const AppleMosaic = document.querySelector('.AppleMosaic');
    const ThirdScreen_Apple = document.querySelector('.ThirdScreen_Apple')

    AppleMosaic.addEventListener('click', function () {
        if (window.getComputedStyle(ThirdScreen_Apple).display === 'none') {
            ThirdScreen_FirstStep.style.display = 'none';
            ThirdScreen_Apple.style.display = 'flex';
        }
    });

    const CowMosaic = document.querySelector('.CowMosaic')
    const ThirdScreen_Cow = document.querySelector('.ThirdScreen_Cow')

    CowMosaic.addEventListener('click', function () {
        if (window.getComputedStyle(ThirdScreen_Cow).display === 'none') {
            ThirdScreen_FirstStep.style.display = 'none';
            ThirdScreen_Cow.style.display = 'flex';
        }
    });

    const Back = document.querySelector('.back')
    Back.addEventListener('click', function () {
        if (window.getComputedStyle(ThirdScreen_Apple).display === 'flex') {
            ThirdScreen_Apple.style.display = 'none';
            ThirdScreen_FirstStep.style.display = 'flex';
        }
    });

    Back_cow.addEventListener('click', function () {
        if (window.getComputedStyle(ThirdScreen_Cow).display === 'flex') {
            ThirdScreen_Cow.style.display = 'none';
            ThirdScreen_FirstStep.style.display = 'flex';
        }
    });

    FromMilk.addEventListener('click', function () {
        if (window.getComputedStyle(First_FindGame).display === 'none') {
            secondscreen.style.display = 'none';
            First_FindGame.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'First_FindGame')
        }
    });

    Button_FindGame_First.addEventListener('click', function () {
        if (window.getComputedStyle(Modal_Find_First).display === 'flex') {
            Modal_Find_First.style.display = 'none';
        }
    });

    const strawberry = document.querySelector('.strawberry')
    const ThreeD_First = document.querySelector('.ThreeD_First')
    strawberry.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_First).display === 'none') {
            secondscreen.style.display = 'none';
            ThreeD_First.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_First')
        }
    });

        const BottleProduct = document.querySelector('.BottleProduct')
        const ThreeD_Bottle = document.querySelector('.ThreeD_Bottle')
        BottleProduct.addEventListener('click', function () {
            if (window.getComputedStyle(ThreeD_Bottle).display === 'none') {
                ThreeD_First.style.display = 'none';
                ThreeD_Bottle.style.display = 'flex';
                sessionStorage.setItem('CurrentSession', 'ThreeD_Bottle')
            }
    });

    // const ProductsFirst = document.querySelector('.ProductsFirst');
    // const ProductsFirstConteiner = document.querySelector('.ProductsFirstConteiner');

    // let clone = ProductsFirst.cloneNode(true);
    // ProductsFirstConteiner.appendChild(clone);

    // let speed = 10;  // Скорость движения
    // let position = 0; // Начинаем с правого края

    // function moveMarquee() {
    //     position -= speed;
        
    //     // Если весь оригинальный блок скрылся, сбрасываем позицию
    //     if (position <= -ProductsFirst.offsetWidth) {
    //         position = 0;
    //     }

    //     ProductsFirst.style.transform = `translateX(${position}px)`;
    //     clone.style.transform = `translateX(${position}px)`;

    //     requestAnimationFrame(moveMarquee);
    // }

    // moveMarquee();
});