// App should have way to generate 4 random elements to pick up
// App should have way to display these 4 elements to pick up on screen
// App should have way to generate another random elements from 10 to 15 elements
// App should have way to pick up only these elements that are meant to pick
// App should have way to log alert after picked wrong element

const container = document.getElementById("container");
const box = document.getElementById("box");
const toDisplay = 20; // level of hardness (how many random element without element fo find)
let displayAnimals = [];
let elementsToFind = []; // array of items to find
let allAnimals;
let foundAnimals = [];
const animals = [
    {
        icon: "🦁",
        id: "lion",
    }, 
    {
        icon: "🐮",
        id: "cow",
    }, 
    {
        icon: "🐷",
        id: "piggy",
    },
    {
        icon: "🐸",
        id: "frog",
    },
    {
        icon: "🐧",
        id: "pinguin",
    },
    {
        icon: "🐦",
        id: "bird",
    },
];

// Generate 4 random animals to pick up and display on screen
/* function randomAnimals() {
    // generate elements
    for (let i = 0; elementsToFind.length < 3; i++) {
        const index = Math.floor(Math.random() * animals.length);
        const animalId = animals[index].id;
        elementsToFind.push(animalId);
    };
    // create elements and display on screen

    elementsToFind.forEach(function(el) {
        const found = animals.find(function(animal) {
            return animal.id === el;
        });
        const element = document.createElement("div");
        element.classList.add("animal");
        element.textContent = found.icon;
        element.dataset.id = found.id;
        element.style.top = `${Math.random() * 90}%`;
        element.style.left = `${Math.random() * 90}%`;
        container.prepend(element);
    });
}; */

/* function randomAnimals() {

    if (elementsToFind.length <= 3) {
        const index = Math.floor(Math.random() * animals.length);
        elementsToFind.push(animals[index].id);

        const element = document.createElement("div");
        element.classList.add("animal");
        element.textContent = animals[index].icon;
        element.dataset.id = animals[index].id;
        element.style.top = `${Math.random() * 90}%`;
        element.style.left = `${Math.random() * 90}%`;
        container.prepend(element);
    };
}; */

/* function createRandomAnimals() {
    let count = 0;

    const time = setInterval(function() {
        count++;
        if (count !== toDisplay) {
            const index = Math.floor(Math.random() * animals.length);
            const animalElement = document.createElement("div");
            
            animalElement.classList.add("animal");
            animalElement.textContent = animals[index].icon;
            animalElement.dataset.id = animals[index].id;
            animalElement.style.top = `${Math.random() * 90}%`; 
            animalElement.style.left = `${Math.random() * 90}%`;
            container.prepend(animalElement);
            randomAnimals();
            addFindingEvent();
            if (elementsToFind.length === 4) {
                console.log('tofind', elementsToFind);
            }
        } else {
            clearInterval(time);
        }
    }, 600);
    
} */

function createAnimals() {
    for (let i = 1; displayAnimals.length < toDisplay -1 ; i++) {
        for (let y = 0; elementsToFind.length < 3; i++) {
            const index = Math.floor(Math.random() * animals.length);
            elementsToFind.push(animals[index].id);
            displayAnimals.push(animals[index].id);
        };
        const index = Math.floor(Math.random() * animals.length);
        displayAnimals.push(animals[index].id);
    };
    animals.push({
        icon: "🕷",
        id: "killer",
    });
    displayAnimals.push(animals[animals.length - 1].id);
    animals.pop();

    // sort displayAnimals randomly
    displayAnimals.sort(() => 0.5 - Math.random());
    displayAnimals.forEach(function() {
        setTimeout(function() {
            
        })
    });

    console.log(elementsToFind);
    console.log(displayAnimals);
    
};

createAnimals();

/* function createKiller() {
    // push killer element to array in case for displaying killer once
    animals.push({
        icon: "🕷",
        id: "killer",
    });
    const killer = animals.find(el => el.id === "killer");
    const killerElement = document.createElement("div");
    killerElement.classList.add("animal");
    killerElement.textContent = killer.icon;
    killerElement.dataset.id = killer.id;
    killerElement.style.top = `${Math.random() * 90}%`; 
    killerElement.style.left = `${Math.random() * 90}%`;
    container.prepend(killerElement);
    animals.pop();
} */

function findElement() {
    const elementId = this.dataset.id;
    // find element by it's id 
     const isFound = elementsToFind.some(function(element){
        return element === elementId;
     });
    // if you found item then remove it
    if (isFound) {
        // remove element from array
        const found = elementsToFind.findIndex(el => el === elementId)
        elementsToFind.splice(found, 1);
        this.remove();
        console.log('to find: ', elementsToFind);
        // If every element found then you win
        if (elementsToFind.length === 0) {
            console.log(`%c WINNER`, `font-size: 3rem; color: darkgreen`);
            allAnimals.forEach(removeFindingEvent);
        } else {
            console.log(`%c That's correct element!`, `background: lightgreen;`);
        }
    } else if (elementId === "killer") {
        allAnimals.forEach(removeFindingEvent);
        console.log('%c YOU LOSE!!!',' background: black; color: red; font-size: 4rem;');
    } else {
        console.log(`%c WRONG!!!`, `background: red`);
    }
}
function addFindingEvent() {
    // If all elements are loaded on page, then add to every element 'click' event with function of finding correct element
    allAnimals = document.querySelectorAll('.animal');
    allAnimals.forEach(function(element) {
        element.addEventListener('click', findElement);
    });
};
//function for removing event on every displayed element
function removeFindingEvent(element) {
    element.removeEventListener('click', findElement);
};

//createRandomAnimals();


