// App should have way to generate 4 random elements to pick up
// App should have way to display these 4 elements to pick up on screen
// App should have way to generate another random elements from 10 to 15 elements
// App should have way to pick up only these elements that are meant to pick
// App should have way to log alert after picked wrong element

const container = document.getElementById("container");
const box = document.getElementById("box");
const toDisplay = 10; // level of hardness
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

// Generate 4 random animals to pick up and display on screen
function randomAnimals() {
    // generate elements
    for (let i = 0; elementsToFind.length !== 4; i++) {
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
};

function createRandomAnimals() {
    for (let i = 0; i !== toDisplay; i++) {
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
    };
    // If elements are loaded on page, then add to every element 'click' event with function of finding correct element
    allAnimals = document.querySelectorAll('.animal');
    allAnimals.forEach(addFindingEvent);
    console.log('all animals', allAnimals)
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
            console.log('find right one',foundAnimals);
        }
    } else {
        console.log('wrong');
    }
}
//function for adding event on every displayed element
function addFindingEvent(element) {
    element.addEventListener('click', findElement);
};
//function for removing event on every displayed element
function removeFindingEvent(element) {
    element.removeEventListener('click', findElement);
};


randomAnimals();
createRandomAnimals();
console.log('tofind', elementsToFind);













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
