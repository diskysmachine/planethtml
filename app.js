'use strict';

// 1 +
const plane = document.getElementById("plane");
const speed = 10;
let posX = 100;
let posY = 100;

plane.style.left = posX + 'px';
plane.style.top = posY + 'px';

const windowWidth = document.documentElement.offsetWidth
const planetWidth = plane.offsetWidth

const windowHeight = document.documentElement.clientHeight
const planetHeight = plane.offsetHeight

// 1 - найти картинку с которой будем работать
// 2 - обрабатывать события нажатия на клавиши
// 3 - изменять координаты картинки (plane) в зависимости от выбранной клавиши
// 4 - обозначить пределы перемещения +
// 5 - убивать, если натыкается на облако

// 2 +
document.addEventListener('keydown', function(event) {
  // находится справа и хочет направо
  if (posX >= windowWidth - planetWidth && event.code == 'KeyD') {
    // запрещаем делать что - то после
    return
  }

  // если мы находимся слева и хотим налево
  if (posX <= 0 && event.code === 'KeyA') {
    return
  }

  // если мы двигаемся вниз и мы внизу
  if (posY >= windowHeight - planetHeight && event.code === 'KeyS') {
    return
  }

  // если мы двигаемся вверх и мы вверху
  if (posY <= 0 && event.code === 'KeyW') {
    return
  }

  // изменение координат самолета
  // 3 +
  if(event.code == 'KeyD'){
    posX = posX + speed
    plane.style.left = posX + 'px';
  }

  if(event.code=="KeyS"){
    posY+=speed;
    plane.style.top = posY+'px';
  }

  if(event.code=="KeyA"){
    posX-=speed;
    plane.style.left = posX+'px';
  }

  if(event.code=="KeyW"){
    posY-=speed;
    plane.style.top = posY+'px';
  }
})