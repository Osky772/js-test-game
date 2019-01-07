const body = document.querySelector("body");
const deliverContainer = document.querySelector(".deliver-map");

const car = document.createElement("div");
car.classList.add("car");
car.dataset.px = 'px';
const suffix = car.dataset.px;
deliverContainer.prepend(car);

const home1 = document.querySelector(".home1");

let deg = 90;
let positionY = 0;
let positionX = 0;
let carSizeY = positionY + 80;
let carSizeX = positionX + 80;

let posY = Number(getComputedStyle(home1).getPropertyValue("top").slice(0, -2));
let posX = Number(getComputedStyle(home1).getPropertyValue("left").slice(0, -2));
let width = Number(getComputedStyle(home1).getPropertyValue("width").slice(0, -2));
let height = Number(getComputedStyle(home1).getPropertyValue("height").slice(0, -2));
console.log('Y', posY)
console.log('X', posX)
console.log('wh', width)
console.log('hh', height)

/* let sizeX = posX + width;
let sizeY = posY + height;
console.log(sizeY);
console.log(sizeX); */


function rideRight() {
    if (Boolean(positionX + 80 < width + posX && positionX + 80 >= posX && positionY === posY)) {
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
    if (Boolean(positionX - 80 < width + posX && positionX - 80 >= posX && positionY === posY)) {
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
    if (Boolean(positionX < width + posX && positionX >= posX && positionY + 80 <= height + posY)) {
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
    if (Boolean(positionX < width + posX && positionX >= posX && positionY - 80 <= height + posY)) {
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
