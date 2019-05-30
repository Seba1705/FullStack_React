function $(id){
    return document.getElementById(id);
}

var btnEnviar = $("btn-enviar"),
    modal = $("modal-container");

function enviarFormulario(e){
    e.preventDefault();
    $("sNombre").textContent = $("input-name").value;
    $("sApellido").textContent = $("input-lastname").value;
    $("sContacto").textContent = $("input-contact").value;
    $("sMensaje").textContent = $("input-messege").value;
    modal.style.display = "flex";
}


btnEnviar.addEventListener("click", enviarFormulario);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}