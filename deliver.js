const body = document.querySelector("body");
const deliverContainer = document.createElement("div");
deliverContainer.classList.add("deliver-map");
body.prepend(deliverContainer);

const car = document.createElement("div");
car.classList.add("car");
car.dataset.px = 'px';
const suffix = car.dataset.px;
deliverContainer.prepend(car);

function rideRight() {
    car.style.transform = "rotate(90deg)";
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionX`);
    // trim value of "px"
    let positionX = value.slice(0, -2);
    // update position with more 80px
    document.documentElement.style.setProperty(`--positionX`, Number(positionX) + 80 + suffix);
    console.log(getComputedStyle(car).transform);
};

function rideDown() {
    car.style.transform = "rotate(180deg)";
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionY`);
    let positionY = value.slice(0, -2);
    document.documentElement.style.setProperty(`--positionY`, Number(positionY) + 80 + suffix);
    console.log(getComputedStyle(car).transform);
};

function rideLeft() {
    car.style.transform = "rotate(270deg)";
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionX`);
    let positionX = value.slice(0, -2);
    document.documentElement.style.setProperty(`--positionX`, Number(positionX) - 80 + suffix);
    console.log(getComputedStyle(car).transform);
};

function rideTop() {
    // if car is turned left then...
    let direction = getComputedStyle(car).transform;
    if (direction === "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") {
        car.style.transform = "rotate(360deg)";
    } else {
        car.style.transform = "rotate(0deg)";
    }
    console.log(getComputedStyle(car).transform);
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionY`);
    let positionY = value.slice(0, -2);
    document.documentElement.style.setProperty(`--positionY`, Number(positionY) - 80 + suffix);
}

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
