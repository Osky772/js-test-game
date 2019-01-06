const body = document.querySelector("body");
const deliverContainer = document.querySelector(".deliver-map");

const car = document.createElement("div");
car.classList.add("car");
car.dataset.px = 'px';
const suffix = car.dataset.px;
deliverContainer.prepend(car);

let deg = 90;
let positionY = 0;
let positionX = 0;

function rideRight() {
    deg = 90;
    car.style.transform = `rotate(${deg}deg)`;
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionX`);
    // trim value of "px"
    positionX = Number(value.slice(0, -2));
    console.log('X', positionX, 'Y', positionY)
    // update position with more 80px
    if (positionX < 1040) {
        positionX += 80;
        document.documentElement.style.setProperty(`--positionX`, positionX + suffix);
    };
};

function rideDown() {
    deg = 180;
    car.style.transform = `rotate(${deg}deg)`;
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionY`);
    positionY = Number(value.slice(0, -2));
    console.log('X', positionX, 'Y', positionY);
    if (positionY < 640) {
        positionY += 80;
        document.documentElement.style.setProperty(`--positionY`, positionY + suffix);
    };
};

function rideLeft() {
    deg = 270;
    car.style.transform = `rotate(${deg}deg)`;
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionX`);
    positionX = Number(value.slice(0, -2));
    console.log('X', positionX, 'Y', positionY)
    if (positionX > 0) {
        positionX -= 80;
        document.documentElement.style.setProperty(`--positionX`, positionX + suffix);
    };
};

function rideTop() {
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
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionY`);
    positionY = Number(value.slice(0, -2));
    console.log('X', positionX, 'Y', positionY);
    if (positionY > 0) {
        positionY -= 80;
        document.documentElement.style.setProperty(`--positionY`, positionY + suffix);
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
