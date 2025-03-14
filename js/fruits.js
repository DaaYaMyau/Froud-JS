// document.addEventListener("DOMContentLoaded", function () {
//     const fruit = document.querySelectorAll(".fruit");

//     fruit.forEach(fruit => {
//         let maxX = window.innerWidth - fruit.clientWidth;
//         let maxY = window.innerHeight - fruit.clientHeight;

//         let randomX = Math.random() * maxX;
//         let randomY = Math.random() * maxY;
//         let randomRotation = Math.random() * 30 - 15; // Поворот от -15° до 15°
//         // let randomZ = Math.floor(Math.random() * 10) + 1; // z-index от 1 до 10

//         fruit.style.left = `${randomX}px`;
//         fruit.style.top = `${randomY}px`;
//         fruit.style.transform = `rotate(${randomRotation}deg)`;
//         // fruit.style.zIndex = randomZ;

//     let isDragging = false;
//     let offsetX, offsetY;

//     fruit.addEventListener("mousedown", function(event) {
//         isDragging = true;

//         offsetX = event.clientX - fruit.getBoundingClientRect().left;
//         offsetY = event.clientY - fruit.getBoundingClientRect().top;

//         document.addEventListener("mousemove", onMouseMove);
//         document.addEventListener("mouseup", onMouseUp);
//     });

//     function onMouseMove(event) {
//         if (isDragging) {
//             let x = event.clientX - offsetX;
//             let y = event.clientY - offsetY;

//             fruit.style.left = x + "px";
//             fruit.style.top = y + "px";
//         }
//     }

//     function onMouseUp() {
//         isDragging = false;

//         document.removeEventListener("mousemove", onMouseMove);
//         document.removeEventListener("mouseup", onMouseUp);
//     }
//     });

//     // let draggableElement = document.getElementById("draggable");


//     });

document.addEventListener("DOMContentLoaded", function () {
    const fruits = document.querySelectorAll(".fruit");
    const Modal_Find_Cow = document.querySelector('.Modal_Find_Cow')
    const Button_Resume_Cow = document.querySelector('.Button_Resume_Cow')
    const CowGame = document.querySelector('.CowGame')
    const Modal_Find_Garfild = document.querySelector('.Modal_Find_Garfild')
    const Button_Resume_Garfild = document.querySelector('.Button_Resume_Garfild')
    const garfild = document.querySelector('.garfild')
    const First_FindGame = document.querySelector('.First_FindGame');
    const Second_FindGame = document.querySelector('.Second_FindGame');
    const Modal_Find_Second = document.querySelector('.Modal_Find_Second')
    const Button_Resume_Second = document.querySelector('.Button_Resume_Second')

    let isDragging = false;
    let currentFruit = null;
    let offsetX = 0, offsetY = 0;
    

    fruits.forEach(fruit => {
        let maxX = window.innerWidth - fruit.clientWidth;
        let maxY = window.innerHeight - fruit.clientHeight;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;
        let randomRotation = Math.random() * 30 - 15;

        fruit.style.position = "absolute";
        fruit.style.left = `${randomX}px`;
        fruit.style.top = `${randomY}px`;
        fruit.style.transform = `rotate(${randomRotation}deg)`;
        fruit.style.cursor = "grab";

        fruit.addEventListener("mousedown", function (event) {
            isDragging = true;
            currentFruit = fruit;
            

            fruit.style.cursor = "grabbing";
            fruit.style.zIndex = 1; // Перемещаемый элемент поверх других

            offsetX = event.clientX - fruit.getBoundingClientRect().left;
            offsetY = event.clientY - fruit.getBoundingClientRect().top;

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
    });

    function onMouseMove(event) {
        if (!isDragging || !currentFruit) return;

        let x = event.clientX - offsetX;
        let y = event.clientY - offsetY;

        currentFruit.style.left = `${x}px`;
        currentFruit.style.top = `${y}px`;
    }

    function onMouseUp() {
        if (!currentFruit) return;

        isDragging = false;
        currentFruit.style.cursor = "grab";
        currentFruit = null;

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }


    let count = 0;
    const clickCount = document.getElementById('clickCount');
    document.querySelectorAll(".pixels").forEach(pixel => {
        pixel.addEventListener("click", (e) => {
            count += 1;
            clickCount.textContent = count;
            pixel.style.display = 'none';

            if (count === 7) {
                fruits.forEach(fruit => {
                    fruit.style.display = 'none';
                });

                    if (window.getComputedStyle(Second_FindGame).display === 'none') {
                        First_FindGame.style.display = 'none';
                        Second_FindGame.style.display = 'flex';
                        sessionStorage.setItem('CurrentSession', 'Second_FindGame')
                        fruits.forEach(fruit => {
                            fruit.style.display = 'absolute';
                        });
                    }
            }
        });
    });

    Button_Resume_Second.addEventListener('click', function () {
        if (window.getComputedStyle(Modal_Find_Second).display === 'flex') {
            Modal_Find_Second.style.display = 'none';
        }
    });

    CowGame.addEventListener("click", (e) => {
        Modal_Find_Cow.style.display = 'flex';
        CowGame.style.display = 'none';
    });

    Button_Resume_Cow.addEventListener('click', function () {
        if (window.getComputedStyle(Modal_Find_Cow).display === 'flex') {
            Modal_Find_Cow.style.display = 'none';
        }
    });

    garfild.addEventListener("click", (e) => {
        Modal_Find_Garfild.style.display = 'flex';
        garfild.style.display = 'none';
    });

    Button_Resume_Garfild.addEventListener('click', function () {
        if (window.getComputedStyle(Modal_Find_Garfild).display === 'flex') {
            Modal_Find_Garfild.style.display = 'none';
        }
    });


    });

    // PixelAppleGame.addEventListener("click", (e) => {
    //     count += 1;
    //     clickCount.textContent = count;
    // });

    //     if (count >= 10) {
    //         button.disabled = true;

    //     }
    // });

// let isDragging = false;
// let startX, startY

// fruit.addEventListener("mousedown", (e) => {
//     isDragging = true;
//     startX = e.clientX;
//     startY = e.clientY;
//     fruit.style.cursor = "grabbing";
// });

// document.addEventListener("mousemove", (e) => {
//     if (!isDragging) return;

//     let Xcoor = e.clientX - startX;
//     let Ycoor = e.clientY - startY;

//     let newfruitPosX = fruitPosX + Xcoor;
//     let newfruitPosY = fruitPosY + Ycoor;


//     const maxX = 0;
//     const minX = viewWidth - imgWidth;
//     if (newfruitPosX > maxX) newfruitPosX = maxX;
//     if (newfruitPosX < minX) newfruitPosX = minX;

//     const maxY = 0;
//     const minY = viewHeight - imgHeight;
//     if (newfruitPosY > maxY) newfruitPosY = maxY;
//     if (newfruitPosY < minY) newfruitPosY = minY;

//     fruitPosX = newfruitPosX;
//     fruitPosY = newfruitPosY;

//     startX = e.clientX;
//     startY = e.clientY;
// });

// document.addEventListener("mouseup", () => {
//     isDragging = false;
//     fruit.style.cursor = "grab";
// });