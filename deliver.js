(function(){
    const body = document.querySelector("body");
    
    const deliverContainer = document.createElement("div")
    deliverContainer.classList.add("deliver-map");
    body.prepend(deliverContainer);

    const car = document.createElement("div");
    car.classList.add("car");
    car.dataset.px = 'px';
    const suffix = car.dataset.px;
    deliverContainer.prepend(car);
    
    let deg = 90;
    let carPositionY = 0;
    let carPositionX = 0;
    
    const totalWidth = Number(getComputedStyle(deliverContainer).getPropertyValue("width").slice(0, -2));
    const totalHeight = Number(getComputedStyle(deliverContainer).getPropertyValue("height").slice(0, -2));
    
    function rideRight() {
        let cordsX = homesCords.some(function(home) {
            return carPositionX + 80 === home.posX && carPositionY === home.posY && !(carPositionX + 80 === deliverCords.posX && carPositionY === deliverCords.posY);
        });
        if (cordsX) {
                carPositionX;
                console.log("wrong way");
            } else {
                car.style.transition = `top 0.5s, left 0.5s, transform 0.1s`;
                deg = 90;
                car.style.transform = `rotate(${deg}deg)`;
                carPositionX = Number(getComputedStyle(document.documentElement).getPropertyValue(`--carPositionX`).slice(0, -2));
                if (carPositionX < totalWidth) {
                    carPositionX += 80;
                    document.documentElement.style.setProperty(`--carPositionX`, carPositionX + suffix);
                    if (carPositionY === deliverCords.posY && carPositionX === deliverCords.posX) {
                        console.log('winner');
                        window.removeEventListener("keydown", addKeys);
                    };
                };
            };
      };
    
    function rideLeft() {
        let cordsX = homesCords.some(function(home) {
            return carPositionX - 80 === home.posX && carPositionY === home.posY && !(carPositionX - 80 === deliverCords.posX && carPositionY === deliverCords.posY);
        });
        if (cordsX) {
            carPositionX;
            console.log("wrong way");
        } else {
            if (deg === 0) {
                car.style.transition = `top 0.5s, left 0.5s, transform 0.1s`;
                car.style.transform = `rotate(-90deg)`;
                setTimeout(function() {
                    car.style.transition = `top 0.5s, left 0.5s, transform 0s`;
                    deg = 270;
                    car.style.transform = `rotate(${deg}deg)`;
                }, 100);
            } else {
                car.style.transition = `top 0.5s, left 0.5s, transform 0.1s`;
                deg = 270;
                car.style.transform = `rotate(${deg}deg)`;
            }
            carPositionX = Number(getComputedStyle(document.documentElement).getPropertyValue(`--carPositionX`).slice(0, -2));
            if (carPositionX > 0) {
                carPositionX -= 80;
                document.documentElement.style.setProperty(`--carPositionX`, carPositionX + suffix);
                if (carPositionY === deliverCords.posY && carPositionX === deliverCords.posX) {
                    console.log('winner');
                    window.removeEventListener("keydown", addKeys);
                };
            };
        };
    };
    
    function rideDown() {
        let cordsY = homesCords.some(function(home) {
            return carPositionX === home.posX && carPositionY + 80 === home.posY && !(carPositionX === deliverCords.posX && carPositionY + 80 === deliverCords.posY);
        });
        if (cordsY) {
                carPositionY;
                console.log("wrong way");
            } else {
                car.style.transition = `top 0.5s, left 0.5s, transform 0.1s`;
                deg = 180;
                car.style.transform = `rotate(${deg}deg)`;
                carPositionY = Number(getComputedStyle(document.documentElement).getPropertyValue(`--carPositionY`).slice(0, -2));
                if (carPositionY < totalHeight) {
                    carPositionY += 80;
                    document.documentElement.style.setProperty(`--carPositionY`, carPositionY + suffix);
                    if (carPositionY === deliverCords.posY && carPositionX === deliverCords.posX) {
                        console.log('winner');
                        window.removeEventListener("keydown", addKeys);
                    };
                };
            };
    };
    
    function rideTop() {
        let cordsY = homesCords.some(function(home) {
            return (carPositionX === home.posX && carPositionY - 80 === home.posY) && !(carPositionX === deliverCords.posX && carPositionY - 80 === deliverCords.posY);
        });
        if (cordsY) {
            carPositionY;
            console.log("wrong way");
        } else {
            if (deg === 270) {
                car.style.transition = `top 0.5s, left 0.5s, transform 0.1s`;
                deg = 360;
                car.style.transform = `rotate(${deg}deg)`;
            } else if (deg === 360){
                car.style.transition = `top 0.5s, left 0.5s, transform 0s`;
                deg = 0;
                car.style.transform = `rotate(${deg}deg)`;
            } else {
                car.style.transition = `top 0.5s, left 0.5s, transform 0.1s`;
                deg = 0;
                car.style.transform = `rotate(${deg}deg)`;
            }
            carPositionY = Number(getComputedStyle(document.documentElement).getPropertyValue(`--carPositionY`).slice(0, -2));
            if (carPositionY > 0) {
                carPositionY -= 80;
                document.documentElement.style.setProperty(`--carPositionY`, carPositionY + suffix);
                if (carPositionY === deliverCords.posY && carPositionX === deliverCords.posX) {
                    console.log('winner');
                    window.removeEventListener("keydown", addKeys);
                };
            };
        };
    };
    
    function addKeys(e) {
        if (e.keyCode === 39) {
            rideRight();
        } else if (e.keyCode === 40) {
            rideDown();
        } else if (e.keyCode === 37) {
            rideLeft();
        } else if (e.keyCode === 38) {
            rideTop();
        };
    };
    
    window.addEventListener("keydown", addKeys);
    
    /*********************************************
                    CREATE HOUSES
    **********************************************/
    let posY = 0;
    let posX = 0;
    let width = 0;
    let height  = 0;
    
    
    
    function createRow(startX, endX, startY) {
        for (let x = startX; x <= endX; x += 80) {
            const y = startY;
            const home = document.createElement("div");
            home.classList.add("home");
            home.style.setProperty("left", `${x}px`);
            home.style.setProperty("top", `${y}px`);
            deliverContainer.append(home);
        };
    };
    
    function createColumn(startY, endY, startX) {
        for (let y = startY; y <= endY; y += 80) {
            let x = startX;
            const home = document.createElement("div");
            home.classList.add("home");
            home.style.setProperty("top", `${y}px`);
            home.style.setProperty("left", `${x}px`);
            deliverContainer.append(home);
        };
    };
    
    createColumn(80,560,0);
    createRow(160,720,0);
    createColumn(0,640,1040);
    createColumn(0,240,800);
    createRow(160, 560, 160);
    createColumn(240,240,160);
    createRow(160,320,400);
    createRow(320,480,320);
    createColumn(160,320,640);
    createRow(720,880,480);
    createRow(800,880,400);
    createRow(480,560,480);
    createRow(480,880,640);
    createRow(880,880,240);
    createRow(880,880,80);
    createColumn(560,640,160);
    createRow(240,320,560);
    
    const homes = document.querySelectorAll(".home");
    let homesCords = [];
    
    homes.forEach(function(home, i) {
        homesCords.push({
            home: i,
            posY : Number(getComputedStyle(home).getPropertyValue("top").slice(0, -2)),
            posX : Number(getComputedStyle(home).getPropertyValue("left").slice(0, -2)),
        });
    });
    
    // Choose house to deliver
    function deliverTo() {
        const index = Math.floor(Math.random() * homes.length);
        homes[index].classList.add("deliver");
        return homesCords[index];
    };
    const deliverCords = deliverTo();
}());

