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

const secretWords = ["риба", "капуста", "нота", "карась", "птиця", "меч", "мова", "годинник", "спікер", "краватка", "дах"];
const secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
console.log("secretWord: ", secretWord);
let answerArr = [];

for (let i = 0; i < secretWord.length; i++) {
  answerArr[i] = "_";
}
console.log("answerArr: ", answerArr);

let remainingLetters = secretWord.length;
console.log("remainingLetters: ", remainingLetters);

while (remainingLetters > 0) {
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
    for (let j = 0; j < secretWord.length; j++) {
      if (secretWord[j] === guess.toLowerCase()) {
        answerArr[j] = guess.toLowerCase();
        remainingLetters--;
      }
    }
  }
}
alert(answerArr.join(" "));
alert("Отлично! Было загадано слово " + secretWord);
