//gerar uma cor aleatoria

function getRandomColor(){
    const letters = '0123456789ABCDEF'
    let color = '#';

    //for sifnifica para
    //crio a variavel "i" que é de index(a posição logo)
    //i começa em 0; enquanto for menor que 6, rpita a acrescente mais uma alea mesma
    //ou seja, começa zero, ate cumprir a condição soma um (ate chegar a 6 po)


    for(let i=0; i < 6; i++){
        //variavel color é igual a ela mesma letter com random p gerar a ramdominazação do hexadecimal
        color += letters[Math.floor(Math.random() * 16)]
    }

    //apos finalizar o loop retorna a propria cor
    return color;
}

const palette = document.getElementById('palette');
const pixelArt = document.getElementById('pixel-art');
const gridSizeInput = document.getElementById('grid-size');


let selectedColor = '#000000'
let gridSize = 5

//criar uma paleta de cores
function createPalette(){
    palette.innerHTML = '' //limpa a paleta


    // i começa em zero, enquanto for menor q 4 repita oq tiver nos{...}
    for(let i = 0; i < 4; i++){
        const color = getRandomColor()


        const colorDiv = document.createElement('div');


        colorDiv.className ='color'

        colorDiv.style.backgroundColor = color //add bacgdn

        colorDiv.onclick = ()  => {
            selectedColor = color //atualiza para a cor alecionada
        }

        palette.appendChild(colorDiv)// adiciona a paleta a cor gerada
        
    }
}


//criar a grade de pixel art
function createGrid(size){
    pixelArt.innerHTML = '';


    pixelArt.style.gridTemplateColumns = `repeat(${size}, 50px)`

    pixelArt.style.gridTemplateRows = `repeat(${size}, 50px)`


    //size é tamanho, size x size , é linha por colunas
    for(let i=0; i < size * size; i++){
        const pixel = document.createElement('div');


        pixel.className = 'pixel';
        pixel.onclick = () => {
            pixel.style.backgroundColor = selectedColor //pinta a celula com a cor selecionada
        }

        pixelArt.appendChild(pixel)
    }
}


function clearPixels(){
    const pixels = document.querySelectorAll('.pixel')


    pixels.forEach(pixel => pixel.style.backgroundColor = '')
}


function regenateColors(){
    createPalette();
}

function generateGrid(){
    //var size = transform em inteiros
     const size = parseInt(gridSizeInput.value) || 5;
     gridSize = size; //equipar o var


     createGrid(gridSize)// coloca o valor da var como parametro do crateGrid()
}

//exectata a função clearPixels
document.getElementById('clear').onclick = clearPixels;
//exectua a funça~generategrid
document.getElementById('generate').onclick = generateGrid;
//executar a função regenarateVolors
document.getElementById('regenerate-colors').onclick = regenateColors;


gridSizeInput.addEventListener('keypress', (event) =>{

    if(event.key === 'Enter'){
        generateGrid();
    }
});


createPalette();
createGrid(gridSize);