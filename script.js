/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const predictionButton = document.querySelector("button");
const currentForecastTitle = document.querySelector(".current-forecast h1");
const currentForecastProbability = document.querySelector(".current-forecast p");

// Функция-генератор числа и процента вероятности
function generationDate(min, max) {
    const generationNumber = Math.round(Math.random() * (max - min) + min);
    return generationNumber;
}

// Клик по кнопке
predictionButton.addEventListener("click", function() {

    makeListForecast();

    const generationNumber = generationDate(1, 10);
    const predictionPercent = generationDate(0, 100);

    let textPrediction;

    if (generationNumber == 1) {
        textPrediction = "Ты на верном пути!";
    } else if (generationNumber == 2) {
        textPrediction = "У тебя все получится!";
    } else if (generationNumber == 3) {
        textPrediction = "Ты устроишься на работу своей мечты!";
    } else if (generationNumber == 4) {
        textPrediction = "Тебя ждет незабываемый отпуск!";
    } else {
        textPrediction = "Тебе повезет!";
    }

    currentForecastTitle.textContent = textPrediction;
    currentForecastProbability.textContent = `Вероятность: ${predictionPercent}%`;
});

// Создание моего списка предсказаний
function makeListForecast() {

    const title = currentForecastTitle.textContent;
    const percent = currentForecastProbability.textContent;

    if (!title && !percent) {
        return;
    }

    const forecasts = document.querySelector(".forecasts");
    const templateForecast = document.querySelector("#forecast-item");
    const myForecast = templateForecast.content.cloneNode(true);

    myForecast.querySelector("h3").textContent = title;
    myForecast.querySelector("p").textContent = percent;
    forecasts.prepend(myForecast);
};