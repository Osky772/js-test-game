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


var fruits = ['🍏', '🍐', '🍊', '🍋', '🍓'];

var backgroundColors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00','#FFFF00', '#FF7F00', '#FF0000'];

function generateFruit() {
    const index = Math.floor(Math.random() * fruits.length);
    
}

function displayFruits() {
    let count = 0;
    if(count <= 20) {

    }
}