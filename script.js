const container = document.getElementById("container");
const box = document.getElementById("box");
const toDisplay = 10; // level of hardness
let counterElements = 0; // for displayAnimals
let toFind = 3;
let counterRandomElements = 0;
let countFoundElements = 0;
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

function createAnimals() {
    const index = Math.floor(Math.random() * animals.length);
    const animalIcon = animals[index].icon;
    const animalId = animals[index].id;
    const animalElement = document.createElement("div");
    
    animalElement.classList.add("animal");
    animalElement.textContent = animalIcon;
    animalElement.dataset.id = animalId;
    animalElement.style.top = `${Math.random() * 90}%`; 
    animalElement.style.left = `${Math.random() * 90}%`;

    container.prepend(animalElement);
}

function findElement() {
    const elementId = this.dataset.id;

    // find element by it's id 
     const isFound = elementsToFind.some(function(element){
        return element === elementId;
     });

    // if you found item then remove it
    if (isFound) {
        countFoundElements += 1;
        foundAnimals.push(this);
        this.remove();
        if (foundAnimals.length === elementsToFind.length) {
            console.log('You are a winner!');
            console.log(foundAnimals);
            allAnimals.forEach(removeFindingEvent);
        } else {
            console.log('play...');
            console.log('when playing',foundAnimals);

        }
    };
}

function randomAnimals() {
    const index = Math.floor(Math.random() * animals.length);
    const animalId = animals[index].id;

    if (!elementsToFind.includes(animalId)) {
        elementsToFind.push(animalId);
    } else {
        return;
    }
}

function generateRandomAnimals() {
    for (let i = 0; elementsToFind.length !== toFind; i++) {
        randomAnimals();
    }
}

//function for adding event on every displayed element
function addFindingEvent(element) {
    element.addEventListener('click', findElement);
};

//function for removing event on every displayed element
function removeFindingEvent(element) {
    element.removeEventListener('click', findElement);
}

function displayAnimals() {
    for (let i = 0; counterElements !== toDisplay; i++) {
        createAnimals();
        counterElements++;
    };
    
    // If elements are loaded on page, then add to every element 'click' event with function of finding correct element
    allAnimals = document.querySelectorAll('.animal');
    allAnimals.forEach(addFindingEvent);
}

generateRandomAnimals();
displayAnimals();

console.log('tofind',elementsToFind);












/* let generateRandomAnimals = setInterval(function() {
    randomAnimals();
    
    if (elementsToFind.length === toFind) {
        clearInterval(generateRandomAnimals);
    }
}, 0);
 */

/* let displayAnimals = setInterval(function() {
    createAnimals();
    counterElements++;
    console.log('da',elementsToFind)
    if (counterElements === toDisplay) {    
        clearInterval(displayAnimals);
        allAnimals = document.querySelectorAll('.animal');
        
        // If elements are loaded on page, then add to every element 'click' event with function of finding correct element
        allAnimals.forEach(function(element){
            element.addEventListener('click', findElement);
        })
    }

}, 30); */
