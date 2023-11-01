// 31.10.2023 ===============================================================
// малюємо котиків, скільки бажаємо
/* const drawCats = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + "=^.^=");
  }
};
drawCats(10); */

// визначаємо мій вік у секундах
/* const secondsInAMinute = 60;
const minutesInAnHour = 60;
const secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log('secondsInAnHour: ', secondsInAnHour);
const hoursInADay = 24;
const secondsInADay = hoursInADay * secondsInAnHour;
console.log('secondsInADay: ', secondsInADay);
const daysInAYear = 365;
const secondsInAYear = daysInAYear * secondsInADay;
console.log('secondsInAYear: ', secondsInAYear);
let myAge = 36
console.log(myAge * secondsInAYear) */

// дай п'ять
/* let highFives = 0
console.log(++highFives)
console.log(++highFives)
console.log(--highFives)

highFives = 0
console.log(highFives++)
console.log(highFives++)
console.log(highFives) */

/* let balloons = 100;
console.log(balloons *= 2)

balloons = 100;
console.log(balloons /= 4) */

// Strings
/* console.log("hgggghgkjslajffaff".length)

const myName = "Iryna"
console.log(myName[0])
console.log(myName[1])
console.log(myName[2])
console.log(myName[3])
console.log(myName[4]) */

/* const codeWord1 = "обернись"
const codeWord2 = "неужели"
const codeWord3 = "огурцы"
const codeWord4 = "липкие"
const codeWord5 = "?!"

console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]) */

// Slice
/* console.log("text".slice(1, 3))
console.log("text".slice(1))
console.log("text".toUpperCase())

const string = "hey, how are you?"
const newString = string[0].toUpperCase() + string.slice(1).toLowerCase()
console.log('newString: ', newString); */

// &&
/* const hadShower = true;
const hasBackpack = true;
console.log(hadShower && hasBackpack);

// ||
const hasApple = true;
const hasOrange = false;
console.log(hasApple || hasOrange)

// - !
const isWeekend = true;
const needToShowerToday = !isWeekend;
console.log(needToShowerToday) */

// 1.11.2023 ===============================================================
// ===
/* const age = 11;
const seeMovie = function (age, accompanied) {
  if (age >= 12 || accompanied === true) {
    console.log("Ти можешь дивитися цей фільм");
  } else {
    console.log("Ти замалий для цього фільму");
  }
};
seeMovie(8, false) */

// Array
/* const animals = ["Кот", "Пес", "Лама"];
console.log(animals[0]); */

// додати новий елемент до масиву першим - unshift
/* animals.unshift("Мартышка");
console.log(animals);
animals.unshift("Белый медведь");
console.log(animals.length);
console.log(animals[0]);
console.log(animals.slice(-1));
console.log(animals.at(-1)); */

// pop
/* const lastAnimal = animals.pop();
console.log("lastAnimal: ", lastAnimal);
console.log(animals);
console.log(animals.pop());
animals.unshift(lastAnimal);
console.log(animals);
 */
// shift
/* const firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
 */
// concat
/* console.log(animals.concat(firstAnimal)); */

// indexOf
/* const colors = ["красный", "зеленый", "синий"];
console.log(colors.indexOf("синий"));
console.log(colors.indexOf("зеленый"));
console.log(colors.indexOf("фиолетовый")); */

// join - перетворення масиву в строку
/* const boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
console.log(boringAnimals.join("-"));
console.log(boringAnimals.join("*"));
console.log(boringAnimals.join(","));

const myNames = ["Марій", "Марія", "Маріївна"];
console.log(myNames.join(" ")); */

/* const landmarks = [];
landmarks.push("Мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");

console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop()); */

// Math.random();
/* console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 4) + 1);
console.log(Math.floor(Math.random() * 4) + 1);
console.log(Math.floor(Math.random() * 4) + 1);
console.log(Math.floor(Math.random() * 4) + 1);
console.log(Math.floor(Math.random() * 4) + 1); */

// куля долі
/* const phrases = [
  "Звучит неплохо",
  "Да, это определенно надо сделать",
  "Не думаю, что это хорошая идея",
  "Может, не сегодня?",
  "Компьютер говорит нет",
];
// Мне выпить еще молочного коктейля?
console.log(phrases[Math.floor(Math.random() * phrases.length - 1) + 1]); */