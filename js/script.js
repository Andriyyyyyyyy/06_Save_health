console.log('Script connected');

const arrayOfHealthTips = [
    "Дотримуйся здорового харчування – більше овочів, фруктів та води!",
    "Регулярно займайся фізичними вправами, щоб підтримувати тіло у тонусі!",
    "Сон – запорука здоров'я, намагайся спати не менше 7-8 годин на добу!",
    "Пам’ятай про важливість відпочинку та зменшення стресу в повсякденному житті!",
    "Зміцнюй імунітет – вживай вітаміни та більше бувай на свіжому повітрі!",
    "Слідкуй за гігієною, мий руки та уникай контакту з хворими людьми!",
    "Регулярно проходь медичні обстеження для профілактики захворювань!",
    "Не забувай про ментальне здоров'я – приділяй час відпочинку та релаксації!",
    "Пий достатньо води протягом дня, щоб підтримувати гідратацію організму!",
    "Обмеж вживання шкідливих звичок, таких як куріння та надмірне вживання алкоголю!",
    "Намагайся більше рухатися – ходи пішки, їзди на велосипеді, займайся спортом!",
    "Збалансоване харчування допоможе підтримувати енергію та хороший настрій!",
    "Слідкуй за поставою, щоб уникнути проблем зі спиною та хребтом!",
    "Практикуй техніки глибокого дихання для зменшення стресу та покращення самопочуття!",
    "Намагайся уникати надмірного використання гаджетів та давай очам відпочинок!",
    "Завжди знаходь час для улюблених занять, що приносять радість та задоволення!",
    "Підтримуй соціальні зв’язки – спілкування важливе для психологічного здоров’я!",
    "Проводь більше часу на природі – це позитивно впливає на фізичний та емоційний стан!",
    "Старайся харчуватися в один і той самий час, щоб підтримувати стабільний метаболізм!",
    "Приймай контрастний душ – він покращує кровообіг та зміцнює імунітет!"
];

let countOfPills = 5;
let pillsArray = ['💊', '💊', '💊', '💊', '💊']; // Массив для отображения смайликов

const pillsContainer = document.getElementById('count_of_pill');
const btnWishes = document.getElementById('btn_wishes');
const btnBuyPills = document.getElementById('btn_buy_pill');
const pWishes = document.getElementById('p_wishes');

// Функция обновления отображения таблеток
function updatePillsDisplay() {
    pillsContainer.innerText = pillsArray.join('');
}

// Обработчик нажатия на кнопку "Отримати пораду"
btnWishes.addEventListener('click', function () {
    let index = Math.floor(Math.random() * arrayOfHealthTips.length);
    pWishes.innerText = arrayOfHealthTips[index];

    // Заменяем первую найденную таблетку на белый кружок ⚪
    let pillIndex = pillsArray.indexOf('💊');
    if (pillIndex !== -1) {
        pillsArray[pillIndex] = '⚪';
    }
    updatePillsDisplay();
});

// Обработчик нажатия на кнопку "Купити 💊"
btnBuyPills.addEventListener('click', function () {
    pillsArray = ['💊', '💊', '💊', '💊', '💊']; // Восстанавливаем таблетки
    updatePillsDisplay();
});

// Первоначальное обновление отображения таблеток
updatePillsDisplay();
const images = [
    "img/gallery/3.png",
    "img/gallery/4.png",
    "img/gallery/5.png",
    "img/gallery/6.png"
];

let currentIndex = 0;
const galleryImg = document.getElementById("gallery-img");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function updateImage() {
    galleryImg.src = images[currentIndex];
}

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});



ArrayOfVitams.forEach((item) => {
    let divVitamin = document.createElement('div');
    divVitamin.classList.add('vitamins');
    divVitamin.innerHTML = `
        <p>${item.id}</p>
        <h3>${item.title}</h3>
        <hr>
        <img src="img/vitamins/${item.photo}" alt="">
        <p>${item.description}</p>
        <div>
            <p>${'💚'.repeat(item.rating) + '♡'.repeat(5 - item.rating)}</p>
            <p>${item.type}</p>
        </div>`;

    vitaminsContainer.appendChild(divVitamin);
});