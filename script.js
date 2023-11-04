const container = document.querySelector('#container');
const btn = document.querySelector('button');

btn.addEventListener('click', newGrid);

function createGrid(side) {
    const canvas = document.createElement('section');
    canvas.classList.add("canvas");
    const gridSize = ((960/side) - 2) + "px";

    for (let i = 1; i <= side*side; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        cell.style.width = gridSize;
        canvas.appendChild(cell);
        cell.addEventListener('mouseover', handleMouseOver);
    }
    container.appendChild(canvas);
}
createGrid(16);

function newGrid() {
    let side = prompt("How many squares per side of the grid do you want? Max 100.");
    if (side > 100) { side = 100; }
    prevCanvas = document.querySelector(".canvas");
    prevCanvas.remove();
    createGrid(side);
}

function handleMouseOver() {
    colorR = Math.floor(Math.random()*255);
    colorG = Math.floor(Math.random()*255);
    colorB= Math.floor(Math.random()*255);
    this.style.background = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}



