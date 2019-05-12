function $(id){
    var element = document.getElementById(id);
    return element;
}


// 1. Crear un objeto Persona que va a tener atributos de tipo numérico y string.
// var persona = { nombre:"Sebastian" , edad:28 };
// console.log(persona);
// alert("nombre: " + persona.nombre + ", edad: " + persona.edad);


// 2. Definir una variable numérica, asignarle un valor y sumarle 
// var numero = 10;
// numero += 5;
//console.log(numero);


// 3. Crear variables de datos que podría tener una persona. Debe haber un dato de tipo numérico, string, booleano y array.
var name = "Sebastian";
var lastName = "Aguirre";
var isAdult = true;
var edad = 28;
var direction = ["1 de Octubre", " 2821"];
//alert(name + " " + lastName + " vive en " + direction + ". Es audulto? " + isAdult);
//alert(`${name} ${lastName} vive en ${direction}. Es audulto? ${isAdult}`);
$("nombre").textContent = name;
$("apellido").textContent = lastName;
$("edad").textContent = edad;
$("direccion").textContent = direction;
$("esAdulto").textContent = isAdult;
$("imagen").innerHTML = '<img src="./images/montana.jpg" alt="" width="384px" height="216px">';


// 4. Definir dos variables de cadenas, asignarles valores y concatenarlas
// var cadena1 = "primer cadena";
// var cadena2 = "segunda cadena de texto;"
// alert(cadena1 + " " + cadena2);


// 5. Realizar un algoritmo que pida el nombre de una persona. Si el dato entra vacío, debe pedir nuevamente al usuario que introduzca su nombre 
//(“No ha introducido ningún nombre”). 
// Una vez hecho esto,  que se despliegue una alerta de bienvenida con el nombre del usuario.
// var nombre = prompt("Ingrese su numbre");
// console.log(nombre);
// if(nombre != ""){
//     document.write("Hola " + nombre);
// }
// else{
//     nombre = prompt("Ingrese su numbre");
// }
// var nombre = prompt("Ingrese su numbre");
// while(nombre == ""){
//     nombre = prompt("Ingrese su numbre");
// }
// document.getElementById("titulo").textContent = nombre;


//6. Crear algoritmo que pida la edad del usuario.
// Sí el usuario introduce una edad entre 3 y 10 años, indicar que es niño.
// Si el usuario introduce una edad entre 10 años y 17 años, indicar que es adolescente.
// Si introduce una edad entre 18 y 100 años indicar que es adulto.
// Si introduce mayor de 100 años, indicar no “ADMITIDO”.
// var numeroIngresado = parseInt(prompt("Ingrese su edad: "));
// if(numeroIngresado > 3 && numeroIngresado < 10)
//     document.write("Es ninio");
// else if(numeroIngresado >= 10 && numeroIngresado < 18)
//     document.write("Es adolescente");    
// else if(numeroIngresado >= 18 && numeroIngresado <100)
//     document.write("Es adulto");
// else
//     document.write("No admitido");    


// 7. Definir una variable numérica. Asignarle un valor entre 1 y 10 Mostrar a qué grupo pertenece: 
// var valorNumerico = parseInt(prompt("Ingrese un valor numerico: "));
// switch(valorNumerico){
//     case 1:
//     case 2:
//     case 3:
//         document.write("Pertenece al Grupo 1");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         document.write("Pertenece al Grupo 2");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         document.write("Pertenece al Grupo 3");
//         break;
// }
