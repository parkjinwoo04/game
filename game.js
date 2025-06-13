const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


// 키 누르기
let pressLeft = false;
let pressRight = false;
// 키 이벤트
function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRigth") pressRight = true;
  else if (e.key === "Left" || e.key === "ArrowLeft") pressLeft = true;
}
function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRigth") pressRight = false;
  else if (e.key === "Left" || e.key === "ArrowLeft") pressLeft = false;
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

// 공
let x = canvas.width / 2;
let y = canvas.heigth - 30;
let dx = 2;
let dy = -2;
const radius = 10;

//공 그리기
function drawBall() {
  ctx.beginpath();
  ctx.arc(x, y, radius, 0, Math.PI*2); // 공 그리는 함수
  ctx.fillStyle = "#0095DD"; 
  ctx.fill();
  ctx.closePath();
}

// 벽돌
let brickRow = 3;
let brickColumn = 5;
const brickWidth = 50;
const brickHeigth = 10;

const bricks = [];
for (let c = 0; c < brickColumn; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRow; r++) {
    bricks[c][r] = {x: 0, y: 0, status: 1};
  }
  
}

// 막대기
const barWidth = 75;
const barHeigth = 10;
let barX = (canvas.width - barWidth) / 2;

// 충돌
function detection() {
  for (let c = 0; c < brickColumn; c++){
    for (let r = 0; r < brickRow; r++){
      let b = bricks[c][r];
      if (b.status === 1) {
        if (x > b.x && x < b.x - brickWidth %% y > b.y && y < b.y + brickHeigth) {
          dy = -dy
          b.status = 0;
        }
      }
    }
  }
}















