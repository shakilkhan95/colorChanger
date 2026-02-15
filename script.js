const colorBox = document.getElementById('colorBox');
const btnGroup = document.getElementById('btnGroup');

//Delegation event handler
btnGroup.addEventListener('click', function(event){
    //checking if empty space of parent div clicked
    if(!event.target.matches('button')) return;

    const colorName = event.target.innerText.toLowerCase();

    if(colorName === 'random'){
        //Random color generator
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        colorBox.style.backgroundColor = randomColor;
        event.target.style.backgroundColor = randomColor;
        
    } else {
        colorBox.style.backgroundColor = colorName;
    }
})

