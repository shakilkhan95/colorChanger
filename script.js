const colorBox = document.getElementById('colorBox');
const randomBtn = document.getElementById('random');
const btnGroup = document.getElementById('btnGroup');

//Delegation event handler
btnGroup.addEventListener('click', function(event){
    const colorName = event.target.innerText.toLowerCase();

    if(colorName === 'random'){
        //Random color generator
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        colorBox.style.backgroundColor = randomColor;
        randomBtn.style.backgroundColor = randomColor;
        
    } else {
        colorBox.style.backgroundColor = colorName;
    }
})

