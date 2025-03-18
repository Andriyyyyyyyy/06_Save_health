console.log('Script connected');

const images = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];
let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function changeImage(index) {
    mainImage.classList.add('hidden');
    setTimeout(() => {
        mainImage.src = images[index];
        mainImage.classList.remove('hidden');
    }, 500);
}

leftArrow.addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    changeImage(currentIndex);
});

rightArrow.addEventListener('click', function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    changeImage(currentIndex);
});

const arrayOfHealthTips = [
    "Дотримуйся здорового харчування – більше овочів, фруктів та води!",
    "Регулярно займайся фізичними вправами, щоб підтримувати тіло у тонусі!",
    "Сон – запорука здоров'я, намагайся спати не менше 7-8 годин на добу!",
];

let pillsArray = ['💊', '💊', '💊', '💊', '💊'];

const pillsContainer = document.getElementById('count_of_pill');
const btnWishes = document.getElementById('btn_wishes');
const btnBuyPills = document.getElementById('btn_buy_pill');
const pWishes = document.getElementById('p_wishes');

function updatePillsDisplay() {
    pillsContainer.innerText = pillsArray.join('');
}

btnWishes.addEventListener('click', function () {
    let index = Math.floor(Math.random() * arrayOfHealthTips.length);
    pWishes.innerText = arrayOfHealthTips[index];

    let pillIndex = pillsArray.indexOf('💊');
    if (pillIndex !== -1) {
        pillsArray[pillIndex] = '⚪';
    }
    updatePillsDisplay();
});

btnBuyPills.addEventListener('click', function () {
    pillsArray = ['💊', '💊', '💊', '💊', '💊'];
    updatePillsDisplay();
});

updatePillsDisplay();
