const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

// створення сітки гри
const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;

let score = 0;

const drawBorder = function () {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

const drawScore = function () {
  ctx.textBaseline = "top";
  ctx.font = "20px Courier";
  ctx.textAlign = "left"; // default
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${score}`, blockSize, blockSize);
};

const gameOver = function () {
  //   clearInterval(intervalId);
  ctx.font = "60px Courier";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`Game Over!`, width / 2, height / 2);
};

// Homework
// 1
// 2
/* setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  drawBorder();
  drawScore();
  //   score++;
  gameOver();
  ctx.strokeRect(0, 0, width, height);
}, 100); */

const Block = function (col, row) {
  this.col = col;
  this.row = row;
};

// const sampleBlock = new Block(5, 5);

Block.prototype.drawSquare = function (color) {
  let x = this.col * blockSize;
  let y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
};

const sampleBlock = new Block(3, 4);
sampleBlock.drawSquare("lightBlue");

Block.prototype.drawSquare = function (color) {
  let centerX = this.col * blockSize + blockSize / 2;
  let centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
};

const sampleCircle = new Block(3, 4);
sampleCircle.drawSquare("lightGreen");

Block.prototype.equal = function (otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};

let apple = new Block(2, 5);
let head = new Block(3, 5);
head.equal(apple); // true

const Snake = function () {
  this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];

  this.direction = "right";
  this.nextDirection = "right";
};

Snake.prototype.draw = function () {
  for (let i = 0; i < this.segments.length; i++) {
    this.segments[i].drawSquare("blue");
  }
};

const snake = newSnake();
snake.draw();
