const container = document.getElementById("container");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");
const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.getElementById('colorBtn');
const brushIcon = document.getElementById('brushIcon');
const modeSelect = document.getElementById("mode");
const gridSizeInput = document.getElementById("gridSize");

let mouseDown = false;
let currentColor = colorPicker.value;
let currentMode = modeSelect.value;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

// Color button logic
colorBtn.addEventListener('click', () => colorPicker.click());
colorPicker.addEventListener('input', e => {
    currentColor = e.target.value;
    brushIcon.setAttribute('fill', currentColor);
    colorBtn.style.backgroundColor = currentColor;
});

// Mode change
modeSelect.addEventListener('change', e => currentMode = e.target.value);

// Create grid
function createGrid(size) {
    size = Math.min(Math.max(size, 4), 80);
    container.innerHTML = '';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = '#ffffff';

        cell.addEventListener('mousedown', paintCell);
        cell.addEventListener('mouseover', paintCell);

        container.appendChild(cell);
    }
}

// Paint logic
function paintCell(e) {
    if (e.type === 'mouseover' && !mouseDown) return;

    switch(currentMode){
        case 'color': e.target.style.backgroundColor = currentColor; break;
        case 'rainbow': e.target.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`; break;
        case 'eraser': e.target.style.backgroundColor = '#ffffff'; break;
    }
}

// Buttons
btn.addEventListener('click', () => createGrid(parseInt(gridSizeInput.value)));
resetBtn.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => cell.style.backgroundColor = '#ffffff');
});

// Initialize default
createGrid(16);
