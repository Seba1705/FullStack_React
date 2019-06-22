//Numero mayor

function numeroMayor(num1, num2){
    if(num1 > num2){
        console.log(`${num1} es mayor que ${num2}`);
    }
    else if(num2 > num1){
        console.log(`${num2} es mayor que ${num1}`);
    }
    else{
        console.log("Los numeros son iguales");
    }
}

numeroMayor(26,25);

//Recibe 2 strings y devuelve la concatenacion
function stringConcatenado(string1, string2){
    var stringConcatenado = `${string1} ${string2}`;
    return stringConcatenado;
}

console.log(stringConcatenado("Hola", "mundo"));

//Recibe un numero muestre n *
function mostarAsteriscos(num){
    var asteriscos = "";
    for(var i=0; i<num; i++){
        asteriscos += '*';
    }
    return asteriscos;
}

console.log(mostarAsteriscos(10));
