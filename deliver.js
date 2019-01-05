const body = document.querySelector("body");
const deliverContainer = document.createElement("div");
deliverContainer.classList.add("deliver-map");
body.prepend(deliverContainer);

const car = document.createElement("div");
car.classList.add("car");
car.dataset.px = 'px';
deliverContainer.prepend(car);

function rideRight() {
    let position = getComputedStyle(document.documentElement).getPropertyValue(`--positionX`);
    
    console.log(position);    
};

window.addEventListener("keydown", function(e) {
    if (e.keyCode === 39)  {
        rideRight();
    };
});
