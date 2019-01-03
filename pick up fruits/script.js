// Gracz musi zebrać jak najwięcej punktów. 
// Gra rozpoczyna się po wciśnieciu przycisku enter.
// Gracz zdobywa punkty poprzez zbieranie owoców (kliknięcie myszką w owoc). 
// Owoce pojawiają się w losowym miejscu na planszy co 0,5s.
// Po kliknięciu myszką w owoc gracz zdobywa punkt, a owoc znika. 
// Po ujawieniu się 20 owoców gra się kończy.
// Gdy zniknie ostatni owoc lub zostanie kliknięty przez gracza to ukazuje się w alercie ile punktów uzyskał gracz na 20 możliwych.

// * pojawiające owoce (1pkt)
// * dodawanie punktów + znikanie owoców (1pkt)
// * zakończenie gry po 20 elementach (0,5pkt)
// * wyświetlenie wyniku gracza na koniec gry (0,5pkt)
// * zmienianie się koloru tła strony (płynne) co 1s (0,5pkt) 
// * rozpczęcie gry po przycisku enter (0,5pkt) 

// Dodatkowa punktacja: **2 pkt**

// * zamiast owoców mogą się też pokazywać bomby, po kliknięciu myszką w bombę gracz traci punkt, a bomba znika, gracz nie może zejść poniżej 0 punktów (1pkt)
// * po wcisnięciu spacji gra się pauzuje, po ponownym wciśnieciu gra toczy się dalej (0,5pkt)
// * po wciśnieciu ok na alercie na koniec gracz może znów zagrać (wcisnąć enter) (0,5pkt)

const body = document.querySelector("body");
const container = document.querySelector("#game");
const pointsLabel = document.querySelector("#points p");
const fruits = ['🍏', '🍐', '🍊', '🍋', '🍓', '💣'];
const backgroundColors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00','#FFFF00', '#FF7F00', '#FF0000'];
let displayedElements = 0;
let elements;
let points = 0;
let paused = false;
let enter = false;

function generateFruit() {
    const index = Math.floor(Math.random() * fruits.length);
    const fruitEl = document.createElement("div");

    fruitEl.classList.add("fruit");
    fruitEl.textContent = fruits[index];
    fruitEl.style.top = `${Math.random() * 90}%`; 
    fruitEl.style.left = `${Math.random() * 90}%`;
    container.prepend(fruitEl);
    displayedElements++;

    //if it is a bomb then displayed element -1 because of displaying in total 20 elements without bombs
    if (fruitEl.textContent === '💣') {
        generateFruit();
        displayedElements -= 1;
    }
};

function displayFruits() {
    const time = setInterval(() => {
        if (displayedElements === 20) {
            body.style.background = "yellow";
            clearInterval(time);
            removeElementsListeners();
            alert(`Udało Ci się zdobyć ${points} punktów na 20 możliwych. Brawo!!!`);
            window.addEventListener('keydown', launchGame);
        } else if (paused) {
            removeElementsListeners();
        } else {
            generateFruit();
            addElementsListeners();
        }
    }, 500);
};

function pickUp() {
    if (this.textContent === '💣') {
        this.remove();
        points > 0 ? points = points - 1 : points;
        pointsLabel.innerHTML = `POINTS: ${points}`;
    } else {
        this.remove();
        points++;
        pointsLabel.innerHTML = `POINTS: ${points}`;
    }
};

function removeElementsListeners() {
    elements = document.querySelectorAll(".fruit");
    elements.forEach((el) => {
        el.removeEventListener('click', pickUp);
    });
};

function addElementsListeners() {
    elements = document.querySelectorAll(".fruit");
    elements.forEach((el) => {
        el.addEventListener('click', pickUp);
    });
};

function randomBackground() {
    let index = 0;
    const time = setInterval(() => {
        if (index === backgroundColors.length) {
            index = 0;
            //body.style.background = backgroundColors[index];
            clearInterval(time);
        } else if (paused) {
            body.style.background = backgroundColors[index];
        } else {
            index++;
            body.style.background = backgroundColors[index];
        };
    }, 1000);
};

function launchGame(e) {
    if (e.keyCode === 13) {
        if (enter) {
            elements.forEach(element => element.remove());
            displayedElements = 0;
            points = 0;
            pointsLabel.innerHTML = `POINTS: ${points}`;
        };
        !enter ? enter = true : enter;
        displayFruits();
        randomBackground();
        window.removeEventListener('keydown', launchGame);
    };
};

window.addEventListener('keydown', launchGame);

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 32) {
        !paused ? paused = true : paused = false;
    }
});