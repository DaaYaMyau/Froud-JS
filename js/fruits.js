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
    const fruit2 = document.querySelectorAll('.fruit2')

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
    
        fruit.addEventListener("dragstart", (event) => {
            startDrag(event.clientX, event.clientY, fruit);
        });
    

        fruit.addEventListener("touchstart", (event) => {
            const touch = event.touches[0];
            startDrag(touch.clientX, touch.clientY, fruit);
        });
    });
    

    function startDrag(clientX, clientY, fruit) {
        isDragging = true;
        currentFruit = fruit;
        currentFruit.style.cursor = "grabbing";
        currentFruit.style.zIndex = 1;
    
        offsetX = clientX - currentFruit.getBoundingClientRect().left;
        offsetY = clientY - currentFruit.getBoundingClientRect().top;
    

        document.addEventListener("dragover", onMouseMove);
        document.addEventListener("drop", onMouseUp);
    

        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onMouseUp);
    }
    

    function onMouseMove(event) {
        if (!isDragging || !currentFruit) return;
    
        let x = event.clientX - offsetX;
        let y = event.clientY - offsetY;
    
        currentFruit.style.left = `${x}px`;
        currentFruit.style.top = `${y}px`;
    
     
    }
    

    function onTouchMove(event) {
        if (!isDragging || !currentFruit) return;
    
        const touch = event.touches[0];
        let x = touch.clientX - offsetX;
        let y = touch.clientY - offsetY;
    
        currentFruit.style.left = `${x}px`;
        currentFruit.style.top = `${y}px`;
    
     
    }

    function onMouseUp() {
        if (!currentFruit) return;
    
        isDragging = false;
        currentFruit.style.cursor = "grab";
        currentFruit = null;
    

        document.removeEventListener("dragover", onMouseMove);
        document.removeEventListener("drop", onMouseUp);
    
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onMouseUp);
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
                        fruit2.forEach(fruit2 => {
                            fruit2.style.display = 'absolute';
                        });
                    }
            }
        });
    });

fruit2.forEach(fruit => {
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

    fruit.addEventListener("dragstart", (event) => {
        startDrag(event.clientX, event.clientY, fruit);
    });

    fruit.addEventListener("touchstart", (event) => {
        const touch = event.touches[0]; 
        startDrag(touch.clientX, touch.clientY, fruit);
    });
});


function startDrag(clientX, clientY, fruit) {
    isDragging = true;
    currentFruit = fruit;
    currentFruit.style.cursor = "grabbing";
    currentFruit.style.zIndex = 1;

    offsetX = clientX - currentFruit.getBoundingClientRect().left;
    offsetY = clientY - currentFruit.getBoundingClientRect().top;


    document.addEventListener("dragover", onMouseMove);
    document.addEventListener("drop", onMouseUp);


    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onMouseUp);
}

function onMouseMove(event) {
    if (!isDragging || !currentFruit) return;

    let x = event.clientX - offsetX;
    let y = event.clientY - offsetY;

    currentFruit.style.left = `${x}px`;
    currentFruit.style.top = `${y}px`;

 
}

function onTouchMove(event) {
    if (!isDragging || !currentFruit) return;

    const touch = event.touches[0]; 
    let x = touch.clientX - offsetX;
    let y = touch.clientY - offsetY;

    currentFruit.style.left = `${x}px`;
    currentFruit.style.top = `${y}px`;

 
}

function onMouseUp() {
    if (!currentFruit) return;

    isDragging = false;
    currentFruit.style.cursor = "grab";
    currentFruit = null;

    document.removeEventListener("dragover", onMouseMove);
    document.removeEventListener("drop", onMouseUp);

    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onMouseUp);
}

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