let popup = document.getElementById('popup');
let popupClose = document.getElementById('popup-close');

//вызов - в html
function openRatingPopup(event) {
    event.preventDefault(); // предотвратить перезагрузку страницы
    popup.style.display = 'flex';
}

//другой способ вызова функции по клику
popupClose.onclick = closeRatingPopup;
function closeRatingPopup(event) {
    event.preventDefault();
    popup.style.display = 'none';
}


//анимация фигурки
let gamerIcon = document.getElementById('gamer-icon');
let clickNumber = 0;

function nextPoint() {
    clickNumber++;
    // удалить классы с координатами и анимацией, чтобы можно было присвоить следующие
    gamerIcon.classList.remove('point' + (clickNumber - 1));
    gamerIcon.classList.remove('animationPoint');
    setTimeout(() => {
        gamerIcon.classList.add('point' + clickNumber);
        gamerIcon.classList.add('animationPoint');
    }, 1);
}


//слайдер
let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 60;
    if (offset > 120) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    console.log(offset);
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 60;
    if (offset < 0) {
        offset = 120;
    }
    sliderLine.style.left = -offset + 'px';
    console.log(offset);
});