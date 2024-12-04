let currMoleTile;
let currPlantTile;

window.onload = function() {
    setGame();
}

function setGame() {
    // Set up the grid for the game board in HTML
    for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.classList.add("tile"); // Add a class for styling
        document.getElementById("board").appendChild(tile);
    }

    // Place mole every second and plant every 2 seconds
    setInterval(setMole, 1000); // 1000 milliseconds = 1 second
    setInterval(setPlant, 2000); // 2000 milliseconds = 2 seconds
}

function getRandomTile() {
    // Randomly select a tile between 0 and 8
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    // Only change mole position if there's no existing mole
    if (currMoleTile) {
        currMoleTile.innerHTML = ""; // Remove the mole from previous tile
    }

    let mole = document.createElement("img");
    mole.src = "../mole.png"; // Correct path to your mole image

    let num = getRandomTile();
    
    // Prevent mole from appearing on the same tile as the plant
    if (currPlantTile && currPlantTile.id === num) {
        return; // If the mole and plant would overlap, don't place the mole
    }

    currMoleTile = document.getElementById(num); // Get the tile to place the mole
    currMoleTile.appendChild(mole); // Place mole in the selected tile
}

function setPlant() {
    // Only change plant position if there's no existing plant
    if (currPlantTile) {
        currPlantTile.innerHTML = ""; // Remove the plant from the previous tile
    }

    let plant = document.createElement("img");
    plant.src = "../flower.png"; // Correct path to your flower image

    let num = getRandomTile();
    
    // Prevent plant from appearing on the same tile as the mole
    if (currMoleTile && currMoleTile.id === num) {
        return; // If the mole and plant would overlap, don't place the plant
    }

    currPlantTile = document.getElementById(num); // Get the tile to place the plant
    currPlantTile.appendChild(plant); // Place plant in the selected tile
}
