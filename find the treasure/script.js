// 15.11.2023 ===============================================================
const getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

const getDistance = function (e, target) {
  const diffX = e.offsetX - target.x;
  const diffY = e.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

const getDistanceHint = function (distance) {
  if (distance < 10) {
    return `Обожжешься! Осталось ${20 - clicks} попыток`;
  } else if (distance < 20) {
    return `Очень горячо! Осталось ${20 - clicks} попыток`;
  } else if (distance < 40) {
    return `Горячо! Осталось ${20 - clicks} попыток`;
  } else if (distance < 80) {
    return `Тепло! Осталось ${20 - clicks} попыток`;
  } else if (distance < 160) {
    return `Холодно! Осталось ${20 - clicks} попыток`;
  } else if (distance < 320) {
    return `Очень холодно! Осталось ${20 - clicks} попыток`;
  } else if (distance < 640) {
    return `Очень-очень холодно! Осталось ${20 - clicks} попыток`;
  } else {
    return `Замерзнешь! Осталось ${20 - clicks} попыток`;
  }
};

const width = 800;
const height = 800;
let clicks = 0;

const target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

$(".map").click(function (e) {
  clicks++;
  const distance = getDistance(e, target);
  const distanceHint = getDistanceHint(distance);
  $(".distance").text(distanceHint);

  if (clicks > 20) {
    alert("КОНЕЦ ИГРЫ");
  } else {
    if (distance < 8) {
      alert("Клад найден! Сделано кликов: " + clicks);
    }
  }
});

// Homework
// 1
// 2
// 3
// 4
