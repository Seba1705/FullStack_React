function $(id){
    return document.getElementById(id);
}

var btnEnviar = $("btn-send"),
    modal = $("modal-container");
    
function enviarFormulario(e){
    var name = $("input-name"),
        lastname = $("input-lastname"),
        type = $("input-")
        contact = $("input-contact");
    // VALIDACION DE INPUTS
    if(validarText(name, e) && validarText(lastname, e) && validarText(contact, e)){
        // CARGAR CONTENIDO EN MODAL
        $("modal-name").textContent = name.value;
        $("modal-lastname").textContent = lastname.value;
        $("modal-contact").textContent = contact.value;
        // LIMPIAR INPUTS 
        name.value="";
        lastname.value="";
        contact.value="";
        // MUESTRO EL MODAL
        modal.style.display = "flex";
    }
}

btnEnviar.addEventListener("click", enviarFormulario);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validarText(input,e){
    if(input.value == ""){
        e.preventDefault();
        input.style.border = "1.5px solid red";
        return false;
    }else{
        input.style.border = "1.5px solid #ccc";
        return true;
    }
}