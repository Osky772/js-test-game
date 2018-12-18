const container = document.getElementById("container");
const box = document.getElementById("box");
const elementsToDisplay = 5; // level of hardness
let counterElements = 0; // for displayAnimals
let elementsToFind = 3;
let counterRandomElements = 0;
let countFoundElements = 0;
let chooseRightOnes = []; // array of items to find
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
        id: "flog",
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
     const isFound = chooseRightOnes.some(function(element){
        return element === elementId;
     });

    // if you found item then remove it
    if (isFound) {
        countFoundElements += 1;
        console.log(countFoundElements);
        this.remove();
        if (countFoundElements === chooseRightOnes.length) {
            console.log('You are a winner!')
        } else {
            console.log('play...');
        }
    };
}

function randomandomAnimals() {
    const index = Math.floor(Math.random() * animals.length);
    const animalId = animals[index].id;

    chooseRightOnes.push(animalId);
}

let generateRandomAnimals = setInterval(function() {
    randomandomAnimals();
    counterRandomElements++;
    if (counterRandomElements === elementsToFind) {
        clearInterval(generateRandomAnimals);
    }
});

let displayAnimals = setInterval(function() {
    createAnimals();
    counterElements++;

    if (counterElements === elementsToDisplay) {    
        clearInterval(displayAnimals);
        foundAnimals = document.querySelectorAll('.animal');
        
        // If elements are loaded on page, then add to every element 'click' event with founction of finding correct element
        foundAnimals.forEach(function(element){
            console.log('el id', element.dataset.id)
            element.addEventListener('click', findElement)
        })
    }
}, 50);

