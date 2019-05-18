function $(id){
    return document.getElementById(id);
}

var btnEnviar = $("btnEnviar");

btnEnviar.addEventListener("click", enviarFormulario);

function enviarFormulario(){

    var tipoDeBullying = $("radSociales").checked ? "Sociales" : "Personal";

    //Falta validar campos
    $("sNombre").textContent = $("txtNombre").value;
    $("sApellido").textContent = $("txtApellido").value;
    $("sTipo").textContent = tipoDeBullying;
    //Falta barrio
    $("sContacto").textContent = $("txtContacto").value;

    $("contModal").style.display = "block";
}

