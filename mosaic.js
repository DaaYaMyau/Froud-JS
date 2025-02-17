document.addEventListener("DOMContentLoaded", function () {
    const Part = document.querySelectorAll('.Part');
    const modal = document.querySelector(".modal");
    const TextInModal = document.querySelector(".TextInModal");
    let gameStarted = false; 

    function getRandomRotation() {
        const rotations = [0, 90, 180, 270];
        return rotations[Math.floor(Math.random() * rotations.length)];
    }
    
    Part.forEach(item => {
        const randomRotation = getRandomRotation();
        item.dataset.rotation = randomRotation;
    
        if (randomRotation === 90) {
            item.classList.add('rotate-90');
        } else if (randomRotation === 180) {
            item.classList.add('rotate-180');
        } else if (randomRotation === 270) {
            item.classList.add('rotate-270');
        }
    });
    
    function checkWinCondition() {
        return Array.from(Part).every(item => parseInt(item.dataset.rotation) === 0);
    }
    
    Part.forEach((item) => {
        item.addEventListener('click', function () {
            gameStarted = true; 
            let currentRotation = parseInt(item.dataset.rotation) || 0;
            currentRotation = (currentRotation + 90) % 360;
            item.dataset.rotation = currentRotation;
    
            item.classList.remove('rotate-90', 'rotate-180', 'rotate-270');
    
            if (currentRotation === 90) {
                item.classList.add('rotate-90');
            } else if (currentRotation === 180) {
                item.classList.add('rotate-180');
            } else if (currentRotation === 270) {
                item.classList.add('rotate-270');
            }

            if (gameStarted && checkWinCondition()) {
                setTimeout(() => {
                    modal.style.display = "flex";
                }, 10);
            }
        });
    });
    
    window.addEventListener("click", (event) => {
        if ((event.target === modal) || (event.target === TextInModal)) {
            modal.style.display = "none";
        }
    });    

});