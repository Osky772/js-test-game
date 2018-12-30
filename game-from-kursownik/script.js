const canvas = document.createElement('canvas');
canvas.width = 500
canvas.height = 500;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

let x = canvas.width/2;
let y = canvas.height/2;
const h = 40;
const fps = 60;

function animationRect() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fillRect(0, 0, x*2, y*2);
    ctx.fillStyle = 'black';
    x += 2;
    y += 2;
    ctx.fillRect(x-h/2, y-h/2, h, h);
}

setInterval(animationRect, 1000/fps);




/* const gradient = ctx.createLinearGradient(10, 310, 450, 10);
gradient.addColorStop(0, 'yellow');
gradient.addColorStop(0.32, 'orange');
gradient.addColorStop(1, 'green');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 500, 500);

ctx.fillStyle = 'blue';
ctx.fillRect(30, 30, 100, 100);
ctx.fillRect(300, 30, 100, 100);
ctx.strokeRect(140, 30, 100, 100);
// /ctx.clearRect(30, 25, 300, 300)

ctx.beginPath();
ctx.moveTo(30, 150);
ctx.lineTo(30, 250);
ctx.lineTo(150, 200);
ctx.lineTo(30, 150);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 250, 100, 0, Math.PI + (Math.PI * 1)/2, true);
ctx.stroke();

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <=     2; j++) {
        ctx.beginPath();
        let x             = 25 + j * 50;                 // x coordinate
        let y             = 25 + i * 50;                 // y coordinate
        let radius        = 20;                          // Arc radius
        let startAngle    = 0;                           // Starting point on circle
        let endAngle      = Math.PI + (Math.PI * j) / 2; // End point on circle
        let anticlockwise = i % 2 == 1;                  // Draw anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
        ctx.fill();
        } else {
        ctx.stroke();
        }
    }
} */