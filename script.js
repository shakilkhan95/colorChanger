const colorBox = document.getElementById('colorBox');
const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const yellowBtn = document.getElementById('yellow');
const blueBtn = document.getElementById('blue');
const randomBtn = document.getElementById('random');

redBtn.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'red';
});

greenBtn.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'green';
});

yellowBtn.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'yellow';
});

blueBtn.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'blue';
});

randomBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
});