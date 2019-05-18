
var container = document.getElementById("container"),
    botones = document.getElementsByTagName("button");
    pixeles = "",
    color = "";

function agregarElementos(){
    pixeles = document.createElement("div");
    pixeles.setAttribute("class", "pixel");
    container.appendChild(pixeles);
    pixeles.setAttribute('onmouseover','escribir(this)');
    //console.log(pixeles);
}

for(let i=0; i<25000; i++){
    agregarElementos();
}

for(let i=0; i<botones.length; i++){
    botones[i].setAttribute('onclick','cambiarColor(this)')
}

function escribir(element){
    element.style.background = color;
}

function cambiarColor(element){
    var elementos = getComputedStyle(element);   
    color = elementos.background;
    console.log(color);
}

