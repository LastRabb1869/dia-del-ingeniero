const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasSize = 400;
const snake = [{ x: 9 * box, y: 10 * box }];
let food = { x: Math.floor(Math.random() * 19 + 1) * box, y: Math.floor(Math.random() * 19 + 1) * box };
let direction = null;
let score = 0;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.keyCode === 37 && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (event.keyCode === 38 && direction !== "DOWN") {
        direction = "UP";
    } else if (event.keyCode === 39 && direction !== "LEFT") {
        direction = "RIGHT";
    } else if (event.keyCode === 40 && direction !== "UP") {
        direction = "DOWN";
    }
}

function draw() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "rgba(144, 250, 115, 0.8)";;
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "rgba(9,136,47, 0.8)";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === "LEFT") snakeX -= box;
    if (direction === "UP") snakeY -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "DOWN") snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        snake.pop();
    }

    let newHead = { x: snakeX, y: snakeY };

    if (snakeX < 0 || snakeY < 0 || snakeX >= canvasSize || snakeY >= canvasSize || collision(newHead, snake)) {
        clearInterval(game);
        alert("Juego Terminado, Puntuación: " + score);
        document.getElementById('retryButton').style.display = 'block';  // Mostrar el botón "Reintentar"
    }

    snake.unshift(newHead);

    ctx.fillStyle = "white";
    ctx.font = "45px Segoe UI";
    ctx.fillText(score, 0.8 * box, 2.6 * box);
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

function reloadGame() {
    location.reload();  // Recargar la página
}

let game = setInterval(draw, 100);
