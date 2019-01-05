const body = document.querySelector("body");
const deliverContainer = document.createElement("div");
deliverContainer.classList.add("container");
body.prepend(deliverContainer);

const car = document.createElement("div");
car.classList.add("car");
deliverContainer.prepend(car);