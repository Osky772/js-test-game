const body = document.querySelector("body");
const deliverContainer = document.createElement("div");
deliverContainer.classList.add("deliver-map");
body.prepend(deliverContainer);

const car = document.createElement("div");
car.classList.add("car");
car.dataset.px = 'px';
deliverContainer.prepend(car);

function rideRight() {
    car.style.transform = "rotate(90deg)";
    const suffix = car.dataset.px;
    let value = getComputedStyle(document.documentElement).getPropertyValue(`--positionX`);
    // trim value of "px"
    let positionX = value.slice(0, -2);
    console.log(positionX);
    document.documentElement.style.setProperty(`--positionX`, Number(positionX) + 80 + suffix);
};

window.addEventListener("keydown", function(e) {
    if (e.keyCode === 39)  {
        rideRight();
    }
});
