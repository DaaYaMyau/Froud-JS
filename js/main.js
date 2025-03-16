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
    const ThreeD_Bottle = document.querySelector('.ThreeD_Bottle')
    const ThreeD_First = document.querySelector('.ThreeD_First')
    const ThreeD_Tomato = document.querySelector('.ThreeD_Tomato')
    const ThreeD_Broccoli = document.querySelector('.ThreeD_Broccoli')
    const ThreeD_Apple = document.querySelector('.ThreeD_Apple')
    const ThreeD_Garlic = document.querySelector('.ThreeD_Garlic')
    const ThreeD_Limon = document.querySelector('.ThreeD_Limon')
    const ThreeD_Croissant = document.querySelector('.ThreeD_Croissant')
    const ThreeD_Cabbage = document.querySelector('.ThreeD_Cabbage')
    const ThreeD_Pineapple = document.querySelector('.ThreeD_Pineapple')
    const ThreeD_Pumpkin = document.querySelector('.ThreeD_Pumpkin')
    const ThreeD_Strawberry = document.querySelector('.ThreeD_Strawberry')
    const ThreeD_Orange = document.querySelector('.ThreeD_Orange')
    const ThreeD_Banana = document.querySelector('.ThreeD_Banana')
    const Second_FindGame = document.querySelector('.Second_FindGame');

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
    } else if (site === 'ThreeD_Bottle') {
        ThreeD_Bottle.style.display = 'flex';
    } else if (site === 'ThreeD_Broccoli') {
        ThreeD_Broccoli.style.display = 'flex';
    } else if (site === 'ThreeD_Tomato') {
        ThreeD_Tomato.style.display = 'flex';
    } else if (site === 'ThreeD_Apple') {
        ThreeD_Apple.style.display = 'flex';
    } else if (site === 'ThreeD_Garlic') {
        ThreeD_Garlic.style.display = 'flex';
    } else if (site === 'ThreeD_Limon') {
        ThreeD_Limon.style.display = 'flex';
    } else if (site === 'ThreeD_Croissant') {
        ThreeD_Croissant.style.display = 'flex';
    } else if (site === 'ThreeD_Cabbage') {
        ThreeD_Cabbage.style.display = 'flex';
    } else if (site === 'ThreeD_Pineapple') {
        ThreeD_Pineapple.style.display = 'flex';
    } else if (site === 'ThreeD_Pumpkin') {
        ThreeD_Pumpkin.style.display = 'flex';
    } else if (site === 'ThreeD_Strawberry') {
        ThreeD_Strawberry.style.display = 'flex';
    } else if (site === 'ThreeD_Orange') {
        ThreeD_Orange.style.display = 'flex';
    } else if (site === 'ThreeD_Banana') {
        ThreeD_Banana.style.display = 'flex';
    } else if (site === 'Second_FindGame') {
        Second_FindGame.style.display = 'flex';
    }

    

    ToScreenTwo.addEventListener('click', function () {
        if (window.getComputedStyle(secondscreen).display === 'none') {
            firstscreen.style.display = 'none';
            secondscreen.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'secondscreen')
            DraggScreen()
        }
    });

    logo.addEventListener('click', function () {
        if (window.getComputedStyle(secondscreen).display === 'none') {
            NotMainScreen.forEach((GetNone) => {
                GetNone.style.display = 'none';
            })
            secondscreen.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'secondscreen')
            DraggScreen()
        } else {
            firstscreen.style.display = 'flex';
            secondscreen.style.display = 'none';
            sessionStorage.setItem('CurrentSession', 'firstscreen')
        }
    });
    
    
    function DraggScreen () {
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
    
            secondBG.addEventListener("mousemove", (e) => {
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
    
            secondBG.addEventListener("mouseup", () => {
                isDragging = false;
                secondBG.style.cursor = "grab";
            });
        };
    }

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

    const back_first = document.querySelector('.back_first')
    back_first.addEventListener('click', function () {
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
    strawberry.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_First).display === 'none') {
            secondscreen.style.display = 'none';
            ThreeD_First.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_First')
        }
    });

    const BottleProduct = document.querySelector('.BottleProduct')
    BottleProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Bottle).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Bottle.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Bottle')
        }
    });

    const back_Bottle = document.querySelector('.back_Bottle')
    back_Bottle.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Bottle).display === 'flex') {
            ThreeD_Bottle.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });
    
    const BroccoliProduct = document.querySelector('.BroccoliProduct')
    BroccoliProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Broccoli).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Broccoli.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Broccoli')
        }
    });

    const back_Broccoli = document.querySelector('.back_Broccoli')
    back_Broccoli.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Broccoli).display === 'flex') {
            ThreeD_Broccoli.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const TomatoProduct = document.querySelector('.TomatoProduct')
    TomatoProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Tomato).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Tomato.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Tomato')
        }
    });

    const back_Tomato = document.querySelector('.back_Tomato')
    back_Tomato.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Tomato).display === 'flex') {
            ThreeD_Tomato.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });
    
    const AppleProduct = document.querySelector('.AppleProduct')
    AppleProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Apple).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Apple.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Apple')
        }
    });

    const back_Apple = document.querySelector('.back_Apple')
    back_Apple.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Apple).display === 'flex') {
            ThreeD_Apple.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const GarlicProduct = document.querySelector('.GarlicProduct')
    GarlicProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Garlic).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Garlic.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Garlic')
        }
    });

    const back_Garlic = document.querySelector('.back_Garlic')
    back_Garlic.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Garlic).display === 'flex') {
            ThreeD_Garlic.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const LimonProduct = document.querySelector('.LimonProduct')
    LimonProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Limon).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Limon.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Limon')
        }
    });

    const back_Limon = document.querySelector('.back_Limon')
    back_Limon.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Limon).display === 'flex') {
            ThreeD_Limon.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const CroissantProduct = document.querySelector('.CroissantProduct')
    CroissantProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Croissant).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Croissant.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Croissant')
        }
    });

    const back_Croissant = document.querySelector('.back_Croissant')
    back_Croissant.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Croissant).display === 'flex') {
            ThreeD_Croissant.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const CabbageProduct = document.querySelector('.CabbageProduct')
    CabbageProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Cabbage).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Cabbage.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Cabbage')
        }
    });

    const back_Cabbage = document.querySelector('.back_Cabbage')
    back_Cabbage.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Cabbage).display === 'flex') {
            ThreeD_Cabbage.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const PineappleProduct = document.querySelector('.PineappleProduct')
    PineappleProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Pineapple).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Pineapple.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Pineapple')
        }
    });

    const back_Pineapple = document.querySelector('.back_Pineapple')
    back_Pineapple.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Pineapple).display === 'flex') {
            ThreeD_Pineapple.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const PumpkinProduct = document.querySelector('.PumpkinProduct')
    PumpkinProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Pumpkin).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Pumpkin.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Pumpkin')
        }
    });

    const back_Pumpkin = document.querySelector('.back_Pumpkin')
    back_Pumpkin.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Pumpkin).display === 'flex') {
            ThreeD_Pumpkin.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const StrawberryProduct = document.querySelector('.StrawberryProduct')
    StrawberryProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Strawberry).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Strawberry.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Strawberry')
        }
    });

    const back_Strawberry = document.querySelector('.back_Strawberry')
    back_Strawberry.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Strawberry).display === 'flex') {
            ThreeD_Strawberry.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const OrangeProduct = document.querySelector('.OrangeProduct')
    OrangeProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Orange).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Orange.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Orange')
        }
    });

    const back_Orange = document.querySelector('.back_Orange')
    back_Orange.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Orange).display === 'flex') {
            ThreeD_Orange.style.display = 'none';
            ThreeD_First.style.display = 'flex';
        }
    });

    const BananaProduct = document.querySelector('.BananaProduct')
    BananaProduct.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Banana).display === 'none') {
            ThreeD_First.style.display = 'none';
            ThreeD_Banana.style.display = 'flex';
            sessionStorage.setItem('CurrentSession', 'ThreeD_Banana')
        }
    });

    const back_Banana = document.querySelector('.back_Banana')
    back_Banana.addEventListener('click', function () {
        if (window.getComputedStyle(ThreeD_Banana).display === 'flex') {
            ThreeD_Banana.style.display = 'none';
            ThreeD_First.style.display = 'flex';
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