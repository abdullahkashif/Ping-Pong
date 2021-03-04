var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 15;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 90;
var paddleHeight2 =10;
var paddleWidth2 = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleX2 = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var rightPressed2 = false;
var leftPressed2= false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode==68)
    {
        rightPressed2 = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 65) {
        leftPressed2 = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode==68)
    {
        rightPressed2 = false;
    }

    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 65)
    {
        leftPressed2 = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawP() {
    ctx.beginPath();
    ctx.rect(paddleX2,paddleHeight2, paddleWidth2, paddleHeight2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawP();
      
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius+paddleHeight2) {
         if(x > paddleX2 && x < paddleX2 + paddleWidth2) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    if(rightPressed2 && paddleX2 < canvas.width-paddleWidth) {
        paddleX2 += 7;
    }
    else if(leftPressed2 && paddleX2 > 0) {
        paddleX2 -= 7;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);