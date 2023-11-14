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

// 2.11.2023 ===============================================================
/* // Homework
// 1,2 
const randomBodyParts = ["рука", "обличчя", "вухо", "палець"]
const randomBodyAnimalsParts = ["лапа", "вуса", "хвіст", "кігті"]
const randomAdjectives = ["весела", "сумна", "музикальна"]
const randomWords = ["муха", "кошеня", "барсук"]

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length - 1) +1]
const randomBodyAnimalsPart = randomBodyAnimalsParts[Math.floor(Math.random() * randomBodyAnimalsParts.length - 1) +1]
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length - 1) +1]
const randomWord = randomWords[Math.floor(Math.random() * randomWords.length - 1) +1]

const randomInsult = `В тебе ${randomBodyPart} ще більш ${randomAdjective}, ніж ${randomBodyAnimalsPart} у ${randomWord}`
console.log(randomInsult)

// 4
const arr = [3, 2, 1] 
console.log(arr.join(" більш, ніж ")); */

// Objects
/* const cat = {
  name: "Munja",
  "full age": 11,
  color: "blau",
  isSheNice: true,
};

console.log(cat.name);
console.log(cat["full age"]);

// Object.keys(obj) - як взнати всі ключі об'єкту
console.log(Object.keys(cat));

const newObj = {};
newObj;

cat.color = "green";
cat.isSheNice = false;
cat.voice = false;
cat["full age"] = 12;
console.log(cat);

const dinosaurs = [
  { name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" },
];

console.log(dinosaurs[0].name);
console.log(dinosaurs[2].name);
console.log(dinosaurs[2].period);
console.log(dinosaurs[1]);

const anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
const dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
const kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

const friends = [anna, dave, kate];

console.log(friends[0]);
console.log(friends[1].age);
console.log(friends[1].luckyNumbers[2]);

const owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
console.log(owedMoney["Джимми"]);
console.log(owedMoney["Элис"]);

owedMoney["Джимми"] += 3;
console.log(owedMoney["Джимми"]);
console.log(owedMoney);

// Homework
//1
const scores = {
  lena: 0,
  max: 0,
  olivia: 0,
};

scores.lena += 3;
scores.max += 1;
scores.olivia += 50;

console.log(scores);

//2
const myCrazyObject = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула",
};
console.log(myCrazyObject["some array"][2].number); */

// 3.11.2023 ===============================================================
// Цикли
/* let myName = "Iryna";
console.log(`Hi ${myName}`);
myName = "Eve";
if (myName.length > 4) {
  console.log("Яке в вас ім'я задовге");
} else {
  console.log(`Ім'я в вас не з дліннючих`);
} */

/* const myName2 = "Iryna";
if (myName2 === "Iryna") {
  console.log("Привіт мені");
} else {
  console.log(`Привіт, ${myName2}`);
} */

// while
/* let sheepCounted = 0;
while (sheepCounted < 10) {
  console.log(`Hi: ${sheepCounted + 1}`);
  sheepCounted++;
} */

// for
/* for (let i = 0; i < 10; i++) {
  console.log(`Hi: ${i}`);
}

const animals = ["лама", "олень", "ведмідь", "лев"];
for (let i = 0; i < animals.length; i++) {
  console.log(`В цьму зоопарку є ${animals[i]}`);
} */

/* for (let i = 2; i < 1000; i = i * 2) {
  console.log(i);
} */

/* for (let i = 3; i < 10000; i = i * 3) {
  console.log(i);
}

let three = 3;
while (three < 10000) {
  console.log(`${ three *= 3}`);
  three++;
}
 */

// Homework
//1
/* const animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let index = 0; index < animals.length; index++) {
  const element = animals[index];
  console.log(`${element} - чудова тварина!`);
} */

//2
/* const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";

while (randomString.length <= 6) {
  let letter = Math.floor(Math.random() * alphabet.length);
  let randomLetter = alphabet[letter];
  randomString += randomLetter;
  console.log(randomString);
}
 */

// 4.11.2023 ===============================================================
/* const input = "javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    output += 4;
  } else if (input[i] === "e") {
    output += 3;
  } else if (input[i] === "i") {
    output += 1;
  } else if (input[i] === "o") {
    output += 0;
  } else {
    output += input[i];
  }

  console.log(output);
} */

// Игра Виселица
/* const userName = prompt("Як вас звати?");
alert(`Привіт, ${userName}`);
const likeCats = confirm("Тобі подобаються котики?");
if (likeCats) {
  alert("Ти чудова кішка!");
} else {
  alert("То не проблема. Все одно ти молодець!");
}
alert("JavaScript это здорово!");
 */

/* const secretWords = [
  "риба",
  "капуста",
  "нота",
  "карась",
  "птиця",
  "меч",
  "мова",
  "годинник",
  "спікер",
  "краватка",
  "дах",
];
const secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
console.log("secretWord: ", secretWord);
let answerArr = [];

for (let i = 0; i < secretWord.length; i++) {
  answerArr[i] = "_";
}
console.log("answerArr: ", answerArr);

let remainingLetters = secretWord.length;
console.log("remainingLetters: ", remainingLetters);
let attempts = remainingLetters * 2;

while (remainingLetters > 0 && attempts > 0) {
  alert(answerArr.join(" "));
  const guess = prompt(
    "Вгадайте букву, або натисніть Відміна для виходу з гри"
  );
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Будь ласка, треба ввести лише одну букву.");
  } else {
    // Відновлюємо гру
    let correctGuess = false;
    for (let j = 0; j < secretWord.length; j++) {
      if (secretWord[j] === guess.toLowerCase() && answerArr[j] === "_") {
        answerArr[j] = guess.toLowerCase();
        remainingLetters--;
        correctGuess = true;
      }
    }
    if (!correctGuess) {
      attempts--;
    }
  }
}
if (attempts <= 0) {
  alert("Число спроб закінчилося! Спробуй ще!");
} else {
  alert(answerArr.join(" "));
  alert("Отлично! Было загадано слово " + secretWord);
} */

// 4.11.2023 ===============================================================
// FUNCTIONS
/* const func = function (name) {
  console.log("Hi, " + name);
};
func("Iryna"); */

// 7.11.2023 ===============================================================
/* const drawCats = function (times) {
  for (let i = 0; i < times; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(100); */
/* 
const drawCats = function (times, whatToDraw) {
  for (let i = 0; i < times; i++) {
    console.log(i + whatToDraw);
  }
};
drawCats(5, " =^.^=");
drawCats(4, " (^_^)"); */

/* const double = function (number) {
  return number * 2;
};
console.log(double(5) + double(4));
console.log(double(double(4)));
 */
// randomWords[Math.floor(Math.random() * randomWords.length)];

/* const pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
}; */
/* const randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];
console.log(pickRandomWord(["Чарли", "Радж", "Николь", "Кейт", "Сэнди"]));
console.log(pickRandomWord(randomWords)); */

// переписати генератор дражнилок з функцією
/* const randomTeaserGenerator = function () {
  const randomBodyParts = ["рука", "обличчя", "вухо", "палець"];
  const randomBodyAnimalsParts = ["лапа", "вуса", "хвіст", "кігті"];
  const randomAdjectives = ["весела", "сумна", "музикальна"];
  const randomWords = ["муха", "кошеня", "барсук"];

  const pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
  };

  const randomInsult = `В тебе ${pickRandomWord(
    randomBodyParts
  )} ще більш ${pickRandomWord(randomAdjectives)}, ніж ${pickRandomWord(
    randomBodyAnimalsParts
  )} у ${pickRandomWord(randomWords)}`;

  return randomInsult;
};

console.log(randomTeaserGenerator()); */

/* const fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }
  return "Пятая буква вашего имени: " + name[4] + ".";
};
console.log(fifthLetter("Николай"));
console.log(fifthLetter("Ник"));

const medalForScore = function (score) {
  if (score < 3) {
    return "Бронзовая";
  }
  if (score < 7) {
    return "Серебряная";
  }
  return "Золотая";
};
console.log(medalForScore(5)); */

// Homework
//1
/* const add = function (num1, num2) {
  return num1 + num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

console.log(add(2, 5));
console.log(multiply(2, 5));
console.log(add(multiply(36325, 9824), 777)); */

// 8.11.2023 ===============================================================
//2
/* const areArraysSame = function (arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[j] != arr2[j]) {
        return false;
      } else {
        return true;
      }
    }
  }
};
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); */

//3
/* // word: загаданное слово
const word = pickWord();
// answerArray: итоговый массив
const answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
const remainingLetters = word.length;
while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  // guess: ответ игрока
  const guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // correctGuesses: количество открытых букв
    const correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray); */

/* const secretWords = [
  "риба",
  "капуста",
  "нота",
  "карась",
  "птиця",
  "меч",
  "мова",
  "годинник",
  "спікер",
  "краватка",
  "дах",
];

let answerArr = [];

const pickWord = () => {
  const secretWord =
    secretWords[Math.floor(Math.random() * secretWords.length)];
  return secretWord;
};
let word = pickWord();

const setupAnswerArray = function (word) {
  let array = word.split("");
  for (let i = 0; i < array.length; i++) {
    answerArr[i] = "_";
  }
  return answerArr;
};
setupAnswerArray(word);

const showPlayerProgress = function (answerArr) {
  alert(answerArr.join(" "));
};

const getGuess = function () {
  return prompt("Вгадайте букву, або натисніть Відміна для виходу з гри");
};

let remainingLetters = word.length;
let attempts = remainingLetters * 2;

const showAnswerAndCongratulatePlayer = function (answerArr) {
  if (remainingLetters === 0) {
    alert(answerArr.join(" "));
    alert("Отлично! Было загадано слово " + word);
  } else if (attempts <= 0) {
    alert("Число спроб закінчилося! Спробуй ще!");
  }
};

const updateGameState = function (guess, word, answerArr) {
  if (guess.length !== 1) {
    alert("Будь ласка, треба ввести лише одну букву.");
  } else {
    // Відновлюємо гру
    let correctGuess = false;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase() && answerArr[j] === "_") {
        answerArr[j] = guess.toLowerCase();
        remainingLetters--;
        correctGuess = true;
      }
    }
    if (!correctGuess) {
      attempts--;
    }
  }
};

while (remainingLetters > 0 && attempts > 0) {
  showPlayerProgress(answerArr);
  guess = getGuess();
  if (guess === null) {
    break;
  } else updateGameState(guess, word, answerArr);
}

showAnswerAndCongratulatePlayer(answerArr); */

// 9.11.2023 ===============================================================

/* const headingElement = document.querySelector('.main-heading')
console.log(headingElement.textContent)

const newHeadingText = prompt('Please enter a new heading: ')

headingElement.textContent = newHeadingText */

// JQuery
// const newHeadingText = prompt("Please enter a new heading: ");
//$(".main-heading").text(newHeadingText).fadeOut(3000).fadeIn(2000);
// $("h1").slideUp(1000).slideDown(1000);

// $("body").append("<p>This is a new paragraph</p>");

/* for (let i = 0; i < 3; i++) {
  const hobby = prompt("Please enter your hobby");
  $("body").append(`<p>${hobby}</p>`);
}
 */
/* for (let i = 0; i < 5; i++) {
  $("h1").fadeOut(1000);
  $("h1").fadeIn(1000);
} */

// Homework
/* const bestFriends = ["Maria", "Anton", "Nik", "Mike", "Tony"];
for (let i = 0; i < bestFriends.length; i++) {
  const element = bestFriends[i];
  $("body").append(`<p>${element}</p>`)
  $("body").append(`<p>${element} is the best</p>`);
}

$(".main-heading").text("Hello my friends");
$("p").hide(3000).fadeIn(3000);

for (let i = 0; i < 5; i++) {
  $("h1")
    .fadeOut(1000)
    .fadeIn(1000)
    .fadeOut(2000)
    .fadeIn(2000)
    .fadeOut(3000)
    .fadeIn(3000);
}

$("h1").delay(3000).fadeOut(1000).delay(5000).fadeIn(1000)

$("h1").fadeTo(2000, 0.5); */

// setTimeout
/* const timeout = setTimeout(() => {
  alert("Please wait...")
}, 3000)

const doHomeworkAlarm = () => {
  alert("Doing a homework")
}

const timeoutId = setTimeout(doHomeworkAlarm, 3000)
clearTimeout(timeoutId); */

// setInterval
/* let counter = 1

const message = () =>{
  console.log(`Ти дивишься в консоль вже ${counter} секунд`)
  counter++
}
const intervalId = setInterval(message, 5000)

clearInterval(intervalId) */

// 10.11.2023 ===============================================================
/* let leftOffset = 0;

const moveHeading = () => {
  $(".main-heading").offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset > 200) {
    leftOffset = 0;
  }
};

setInterval(moveHeading, 15); */

/* var clickHandler = function (event) {
  console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler); */

/* $("html").mousemove((e) => {
  $(".main-heading").offset({
    left: e.pageX,
    top: e.pageY,
  });
}); */

// Homework
// 1
/* $("html").click((e) => {
  $(".main-heading").offset({
    left: e.pageX,
    top: e.pageY,
  });
}); */

// 14.11.2023 ===============================================================

// 2
/* const heading = $(".main-heading");
let offset = 0;
let direction = "right";

const moveHeading = () => {
  const currentPosition = heading.offset();

  if (direction === "right") {
    heading.offset({
      top: currentPosition.top,
      left: currentPosition.left + 1,
    });
    offset++;
    if (offset >= 200) {
      direction = "down";
      offset = 0;
    }
  } else if (direction === "down") {
    heading.offset({
      top: currentPosition.top + 1,
      left: currentPosition.left,
    });
    offset++;
    if (offset >= 200) {
      direction = "left";
      offset = 0;
    }
  } else if (direction === "left") {
    heading.offset({
      top: currentPosition.top,
      left: currentPosition.left - 1,
    });
    offset++;
    if (offset >= 200) {
      direction = "up";
      offset = 0;
    }
  } else if (direction === "up") {
    heading.offset({
      top: currentPosition.top - 1,
      left: currentPosition.left,
    });
    offset++;
    if (offset >= 200) {
      direction = "right";
      offset = 0;
    }
  }
};

const int = setInterval(moveHeading, 15);

// 3
heading.click(() => {
  clearInterval(int);
});

// 4
let sum = 0;
let intervalId;
heading.click(() => {
  sum++;
  intervalId = setInterval(moveHeading, 15);

  if (sum >= 3) {
    alert("You win!!!");
    clearInterval(intervalId);
  }
});
 */