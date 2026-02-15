const colorBox = document.getElementById('colorBox');
const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const yellowBtn = document.getElementById('yellow');
const blueBtn = document.getElementById('blue');
const randomBtn = document.getElementById('random');
const btnGroup = document.getElementById('btnGroup');

//Delegation event handler
btnGroup.addEventListener('click', function(event){
    const colorName = event.target.innerText.toLowerCase();

    if(colorName === 'random'){
        //Random color generator
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        colorBox.style.backgroundColor = randomColor;
        
    } else {
        colorBox.style.backgroundColor = colorName;
    }
})

