const container = document.getElementById("container");
const box = document.getElementById("box");
const toDisplay = 10; // level of hardness
let counterElements = 0; // for displayAnimals
let toFind = 3;
let counterRandomElements = 0;
let countFoundElements = 0;
let elementsToFind = []; // array of items to find
let foundAnimals;
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
        this.remove();
        if (countFoundElements === elementsToFind.length) {
            console.log('You are a winner!')
        } else {
            console.log('play...');
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

function displayAnimals() {
    for (let i = 0; counterElements !== toDisplay; i++) {
        createAnimals();
        counterElements++;
    }
    
    // If elements are loaded on page, then add to every element 'click' event with function of finding correct element
    foundAnimals = document.querySelectorAll('.animal');
    foundAnimals.forEach(function(element){
        element.addEventListener('click', findElement);
    })
}

generateRandomAnimals();
displayAnimals();















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
        foundAnimals = document.querySelectorAll('.animal');
        
        // If elements are loaded on page, then add to every element 'click' event with function of finding correct element
        foundAnimals.forEach(function(element){
            element.addEventListener('click', findElement);
        })
    }

}, 30); */
