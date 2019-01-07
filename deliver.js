const body = document.querySelector("body");
const deliverContainer = document.querySelector(".deliver-map");

const car = document.createElement("div");
car.classList.add("car");
car.dataset.px = 'px';
const suffix = car.dataset.px;
deliverContainer.prepend(car);

const homes = document.querySelectorAll(".home");
const home1 = document.querySelector(".home1");

let deg = 90;
let positionY = 0;
let positionX = 0;

/* let sizeX = posX + width;
let sizeY = posY + height;
console.log(sizeY);
console.log(sizeX); */


function rideRight() {
  let posY = 0;
  let posX = 0;
  let width = 0;
  let height  = 0;
    homes.forEach(function(home, i) {
    posY = Number(getComputedStyle(home).getPropertyValue("top").slice(0, -2));
    posX = Number(getComputedStyle(home).getPropertyValue("left").slice(0, -2));
    width = Number(getComputedStyle(home).getPropertyValue("width").slice(0, -2));
    height = Number(getComputedStyle(home).getPropertyValue("height").slice(0, -2));
 });
    if (Boolean(positionX + 80 === posX && positionY >= posY && positionY <= posY + height - 80)) {
            positionX;
        } else {
            deg = 90;
            car.style.transform = `rotate(${deg}deg)`;
            positionX = Number(getComputedStyle(document.documentElement).getPropertyValue(`--positionX`).slice(0, -2));
            // update position with more 80px
            if (positionX < 1040) {
                positionX += 80;
                console.log('X', positionX, 'Y', positionY)
                document.documentElement.style.setProperty(`--positionX`, positionX + suffix);
            };
        };
};

function rideLeft() {
    if (Boolean(positionX - 80 === posX + width - 80 && positionY >= posY && positionY <= posY + height - 80)) {
        positionX;
    } else {
        deg = 270;
        car.style.transform = `rotate(${deg}deg)`;
        positionX = Number(getComputedStyle(document.documentElement).getPropertyValue(`--positionX`).slice(0, -2));
        if (positionX > 0) {
            positionX -= 80;
            console.log('X', positionX, 'Y', positionY);
            document.documentElement.style.setProperty(`--positionX`, positionX + suffix);
        };
    };
};

function rideDown() {
let posY = 0;
let posX = 0;
let width = 0;
let height  = 0;

homes.forEach(function(home, i) {
    posY = Number(getComputedStyle(home).getPropertyValue("top").slice(0, -2));
    posX = Number(getComputedStyle(home).getPropertyValue("left").slice(0, -2));
    width = Number(getComputedStyle(home).getPropertyValue("width").slice(0, -2));
    height = Number(getComputedStyle(home).getPropertyValue("height").slice(0, -2));
});

if (Boolean(positionX >= posX && positionX <= posX + width - 80 && positionY + 80 <= posY)) {
        positionY;
    } else {
        deg = 180;
        car.style.transform = `rotate(${deg}deg)`;
        positionY = Number(getComputedStyle(document.documentElement).getPropertyValue(`--positionY`).slice(0, -2));
        if (positionY < 640) {
            positionY += 80;
            console.log('X', positionX, 'Y', positionY);
            document.documentElement.style.setProperty(`--positionY`, positionY + suffix);
        };
    };
    
};

function rideTop() {
    if (Boolean(positionX >= posX && positionX <= posX + width - 80 && positionY - 80 <= posY + height - 80)) {
        positionY;
    } else {
        if (deg === 270) {
            deg = 360;
            car.style.transform = `rotate(${deg}deg)`
        } else if (deg === 360) {
            deg = 360;
            car.style.transform = `rotate(${deg}deg)`
        } else {
            deg = 0;
            car.style.transform = `rotate(${deg}deg)`
        };
        positionY = Number(getComputedStyle(document.documentElement).getPropertyValue(`--positionY`).slice(0, -2));
        if (positionY > 0) {
            positionY -= 80;
            console.log('X', positionX, 'Y', positionY);
            document.documentElement.style.setProperty(`--positionY`, positionY + suffix);
        };
    };
};

window.addEventListener("keydown", function(e) {
    if (e.keyCode === 39)  {
        rideRight();
    } else if (e.keyCode === 40) {
        rideDown();
    } else if (e.keyCode === 37) {
        rideLeft();
    } else if (e.keyCode === 38) {
        rideTop();
    }
});
