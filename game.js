const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


// 키 누르기
let pressLeft = false;
let pressRight = false;

// 공
let x = canvas.width / 2;
let y = canvas.heigth - 30;
let dx = 2;
let dy = -2;
const radius = 20;

// 벽돌
let brickRow = 3;
let brickColumn = 5;
const brickWidth = 50;
const brickHeigth = 10;


// 막대기
const barWidth = 75;
const barHeigth = 10;
let barX = (canvas.width - barWidth) / 2;

// 튕기기
