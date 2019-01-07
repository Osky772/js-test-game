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

const homes = document.querySelectorAll(".home");
let homesCords = [];

let posY = 0;
let posX = 0;
let width = 0;
let height  = 0;

homes.forEach(function(home, i) {
    homesCords.push({
        home: i,
        posY : Number(getComputedStyle(home).getPropertyValue("top").slice(0, -2)),
        posX : Number(getComputedStyle(home).getPropertyValue("left").slice(0, -2)),
    });
});

let cordsY = homesCords.some(function(home) {
    return home.posY === positionY;
});

function rideRight() {
    let cordsX = homesCords.some(function(home) {
        return positionX + 80 === home.posX && positionY === home.posY;
    });
    if (cordsX) {
            positionX;
        } else {
            deg = 90;
            car.style.transform = `rotate(${deg}deg)`;
            positionX = Number(getComputedStyle(document.documentElement).getPropertyValue(`--positionX`).slice(0, -2));
            if (positionX < 1040) {
                positionX += 80;
                document.documentElement.style.setProperty(`--positionX`, positionX + suffix);
            };
        };
  };

function rideLeft() {
    let cordsX = homesCords.some(function(home) {
        return positionX - 80 === home.posX && positionY === home.posY;
    });
    if (cordsX) {
        positionX;
    } else {
        deg = 270;
        car.style.transform = `rotate(${deg}deg)`;
        positionX = Number(getComputedStyle(document.documentElement).getPropertyValue(`--positionX`).slice(0, -2));
        if (positionX > 0) {
            positionX -= 80;
            document.documentElement.style.setProperty(`--positionX`, positionX + suffix);
        };
    };
};

function rideDown() {
    let cordsY = homesCords.some(function(home) {
        return positionX === home.posX && positionY + 80 === home.posY;
    });
    if (cordsY) {
            positionY;
        } else {
            deg = 180;
            car.style.transform = `rotate(${deg}deg)`;
            positionY = Number(getComputedStyle(document.documentElement).getPropertyValue(`--positionY`).slice(0, -2));
            if (positionY < 640) {
                positionY += 80;
                document.documentElement.style.setProperty(`--positionY`, positionY + suffix);
            };
        };
};

function rideTop() {
    let cordsY = homesCords.some(function(home) {
        return positionX === home.posX && positionY - 80 === home.posY;
    });
    if (cordsY) {
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
            document.documentElement.style.setProperty(`--positionY`, positionY + suffix);
        };
    };
};

window.addEventListener("keydown", function(e) {
    if (e.keyCode === 39) {
        rideRight();
    } else if (e.keyCode === 40) {
        rideDown();
    } else if (e.keyCode === 37) {
        rideLeft();
    } else if (e.keyCode === 38) {
        rideTop();
    }
});
