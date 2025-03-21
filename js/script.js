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

// робота з об'єктами
const arrayOfVitaminObjects = [
    {
        "id": "1",
        "title": "Вітамін B",
        "photo": "",
        "description": "",
        "rating": "",
        "useful": ""
    },
    {
        "id": "2",
        "title": "Омега D3",
        "photo": "",
        "description": "",
        "rating": "",
        "useful": ""
    },
    {
        "id": "3",
        "title": "Вітамін C",
        "photo": "",
        "description": "",
        "rating": "",
        "useful": ""
    }
];

// console.log(arrayOfVitaminObjects)

arrayOfVitaminObjects.forEach((item) => {
    console.log(item);

    let divVitamin = document.createElement('div');
    divVitamin.classList.add('vitamin');
    divVitamin.innerText = item.title;

    document.getElementById('p-vitamins').appendChild(divVitamin);
});