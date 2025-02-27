document.addEventListener("DOMContentLoaded", function () {
    let Part = null; // Глобальная переменная
    const modal = document.querySelector(".modal");
    const TextInModal = document.querySelector(".TextInModal");
    let gameStarted = false;
    
    const AppleMosaic = document.querySelector('.AppleMosaic');
    const ThirdScreen_Apple = document.querySelector('.ThirdScreen_Apple');
    const CowMosaic = document.querySelector('.CowMosaic');
    const ThirdScreen_Cow = document.querySelector('.ThirdScreen_Cow');

    function getRandomRotation() {
        const rotations = [0, 90, 180, 270];
        return rotations[Math.floor(Math.random() * rotations.length)];
    }

    function setupGame() {
        if (!Part) return; // Если Part не определён, выходим из функции

        // Инициализируем мозаичные части с начальной случайной ориентацией
        Part.forEach(item => {
            if (!item.dataset.rotation) {
                const randomRotation = getRandomRotation();
                item.dataset.rotation = randomRotation;
            }

            // Убираем старые классы вращения и добавляем новый
            item.classList.remove('rotate-90', 'rotate-180', 'rotate-270');
            const rotation = parseInt(item.dataset.rotation);
            if (rotation === 90) item.classList.add('rotate-90');
            if (rotation === 180) item.classList.add('rotate-180');
            if (rotation === 270) item.classList.add('rotate-270');
        });

        // Функция для проверки, собрана ли мозаика
        function checkWinCondition() {
            return Array.from(Part).every(item => parseInt(item.dataset.rotation) === 0);
        }

        // Добавляем обработчики на клики
        Part.forEach((item) => {
            item.addEventListener('click', function () {
                gameStarted = true;
                let currentRotation = parseInt(item.dataset.rotation) || 0;
                currentRotation = (currentRotation + 90) % 360;
                item.dataset.rotation = currentRotation;

                // Обновляем классы вращения
                item.classList.remove('rotate-90', 'rotate-180', 'rotate-270');
                if (currentRotation === 90) {
                    item.classList.add('rotate-90');
                } else if (currentRotation === 180) {
                    item.classList.add('rotate-180');
                } else if (currentRotation === 270) {
                    item.classList.add('rotate-270');
                }

                // Если игра началась и условие победы выполнено
                if (gameStarted && checkWinCondition()) {
                    setTimeout(() => {
                        modal.style.display = "flex";
                        console.log("modal");
                    }, 10);
                }
            });
        });
    }

    // При клике на AppleMosaic загружаем части для яблок и запускаем игру
    AppleMosaic.addEventListener('click', function () {
        if (window.getComputedStyle(ThirdScreen_Apple).display === 'flex') {
            Part = document.querySelectorAll('.Part_Apple'); // Загружаем части яблочной мозаики
            setupGame(); // Настроить игру для яблочной мозаики
        }
    });

    // При клике на CowMosaic загружаем части для коровы и запускаем игру
    CowMosaic.addEventListener('click', function () {
        if (window.getComputedStyle(ThirdScreen_Cow).display === 'flex') {
            Part = document.querySelectorAll('.Part_Cow'); // Загружаем части коровьей мозаики
            setupGame(); // Настроить игру для коровьей мозаики
        }
    });

    // Закрываем модальное окно при клике на него
    window.addEventListener("click", (event) => {
        if ((event.target === modal) || (event.target === TextInModal)) {
            modal.style.display = "none";
        }
    });
});
