function $(id){
    return document.getElementById(id);
}

var numero1 = $("num1"),
    numero2 = $("num2"),
    resultado = $("resultado"),
    botonOperador = document.getElementsByTagName("button");

function agregarEventosABoton(){
    for(let i=0; i<botonOperador.length; i++){
        botonOperador[i].setAttribute(`onclick`,`resolver(value)`);
    }
}

agregarEventosABoton();

function resolver(operador){
    //El resultado lo inicio en 0.
    var res = 0;
    //Verifico que los campos tengan datos.
    switch(operador){
        case '+':
            res = parseInt(numero1.value) + parseInt(numero2.value);
            break;
        case '-':
            res = parseInt(numero1.value) - parseInt(numero2.value);
            break;
        case '*':
            res = parseInt(numero1.value) * parseInt(numero2.value);
            break;
        case '/':
            res = parseInt(numero1.value) / parseInt(numero2.value);
            break;
    }
    $("operador").innerHTML = operador;
    resultado.value = res;
}

