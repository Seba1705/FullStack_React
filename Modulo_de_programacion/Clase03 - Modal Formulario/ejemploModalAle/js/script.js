var input1 = document.querySelector("#nombre");
var input2 = document.querySelector("#apellido");
var input3 = document.querySelector("#barrio");
var input4 = document.querySelector("#mail");
var input5 = document.querySelector("#mensaje");
var openModal = document.querySelector("#actionModal");
var modalOpened = document.querySelector("#modal");

function formularioArre(){
    input1.value;
    input2.value;
    input3.value;
    input4.value;
    input5.value;
    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
    console.log(input4.value);
    console.log(input5.value);
    modalOpened.style.display = "flex";
    
}
openModal.addEventListener("click", formularioArre);