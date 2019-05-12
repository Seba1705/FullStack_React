//Cuando carga la ventana del navegador se ejecuta la funcion "loadEvents".
window.addEventListener("load", loadEvents);

//Esta funcion es para no escribir todo el timpo el getEl... retorna el campo pasandole el Id.
function $(id){
    return document.getElementById(id);
}

//Esta funcion asigna a cada elemento su manejador de eventos.
function loadEvents(){
    var btnSuma = $("btnSuma");
    btnSuma.addEventListener("click", suma);
    var btnResta = $("btnResta");
    btnResta.addEventListener("click", resta);
    var btnMulti = $("btnMulti");
    btnMulti.addEventListener("click", multiplicacion);
    var btnDiv = $("btnDiv");
    btnDiv.addEventListener("click", division);
    var btnIgual = $("btnIgual");
    btnIgual.addEventListener("click", operar);
}

//Variables locales.
//Guarda el dato segun el boton precionado.
var operador = "";

//Busco el label para imprimir que boton esta seleccionado.
var labelOperador = $("operador");

//Cambia el valor de la variable operador.
function suma(){
    operador = '+';
    labelOperador.innerHTML = '+';
}

//Cambia el valor de la variable operador.
function resta(){
    operador = '-';
    labelOperador.innerHTML = '-';
}

//Cambia el valor de la variable operador.
function division(){
    operador = '/';
    labelOperador.innerHTML = '/';
}

//Cambia el valor de la variable operador.
function multiplicacion(){
    operador = '*';
    labelOperador.innerHTML = '*';
}

//Realiza la operacion.
function operar(){

    //Valor de la primer variable.
    var numero1 = parseInt($("num1").value);

    //Valor de la segunda variable.
    var numero2 = parseInt($("num2").value);

    //El resultado lo inicio en 0.
    var resultado = 0;

    //Verifico que los campos tengan datos.
    if(!(isNaN(numero1)) && !(isNaN(numero2))){

        //Realiza la operacion segun el valor de operador.
        switch(operador){
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                resultado = numero1 / numero2;
                break;
        }
       
    }
    else{
        alert("Campos incompletos");
    }

    //Aca se va a mostar el resultado.
    var inputResultado = $("resultado");
    
    inputResultado.value =  resultado;
}

