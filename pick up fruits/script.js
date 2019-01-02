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
var fruits = ['🍏', '🍐', '🍊', '🍋', '🍓'];
let backgroundColors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00','#FFFF00', '#FF7F00', '#FF0000'];
let points = 0;
const pointsLabel = document.querySelector("#points p");

function generateFruit() {
    const index = Math.floor(Math.random() * fruits.length);
    const fruitEl = document.createElement("div");

    fruitEl.classList.add("fruit");
    fruitEl.textContent = fruits[index];
    fruitEl.style.top = `${Math.random() * 90}%`; 
    fruitEl.style.left = `${Math.random() * 90}%`;
    container.prepend(fruitEl);
    fruitEl.addEventListener('click', pickUp);
};

function displayFruits() {
    let count = 0;

    const time = setInterval(() => {
        count++;
        generateFruit();
        if (count === 20) {
            clearTimeout(time);
            elements = document.querySelectorAll(".fruit");
            elements.forEach((el) => {
                el.removeEventListener('click', pickUp);
            });
            alert(`Udało Ci się zdobyć ${points} punktów na 20 możliwych. Brawo!!!`)
        }
    }, 500);
};

function pickUp() {
    this.remove();
    points++;
    pointsLabel.innerHTML = `POINTS: ${points}`;
};

function randomBackground() {
    let index = 0;
    setInterval(() => {
        index++;
        body.style.background = backgroundColors[index];
        if (index === backgroundColors.length) {
            index = 0;
        }
    }, 1000);
}

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        displayFruits();
        randomBackground();
    }
})
