// Variaveis de controle
const color = document.querySelector('input');
let screen = document.querySelector('canvas');

let defaultColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let ctx = screen.getContext('2d');

color.onchange = () => defaultColor = color.value; // variavel defaultColor vai receber a cor padrão da variavel color que por sua vez recebe a cor da Tag INPUT

// Eventos do mouse apertar e soltar o botão e saber onde esta o ponteiro
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

// Função de apertar o botão direito do mouse
function mouseDownEvent(e) {
    canDraw = true; // Ao pressionar o botão direito do mouse a variavel canDraw recebera true.
    mouseX = e.pageX - screen.offsetLeft; // movimento horizontal do mouse
    mouseY = e.pageY - screen.offsetTop;  // movimento vertical do mouse
}

//Função de captura de movimento do mouse
function mouseMoveEvent(e) {
    if(canDraw){
        draw(e.pageX, e.pageY); // Usando a função draw para pegar movimento horizontal e vertical do mouse.
    }
}

//Função de soltura do botão do mouse
function mouseUpEvent(e){
    canDraw = false; // Ao soltar o botão direito do mouse a variavel canDraw recebera false.
}

// Função para pintar na direção do ponteiro do mouse
function draw(x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

// Função limpar a tela

function clearBoard() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
