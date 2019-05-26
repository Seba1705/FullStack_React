
function $(id){
    return document.getElementById(id);
}

var btnEnviar = $("btnSend"),
    modal = $("myModal"),
    span = document.getElementsByClassName("close")[0];

function enviarFormulario(e){
    e.preventDefault();
    $("sNombre").textContent = $("fName").value;
    $("sApellido").textContent = $("lName").value;
    $("sContacto").textContent = $("contact").value;
    modal.style.display = "block";
}

function cerrarModal() {
    modal.style.display = "none";
}

btnEnviar.addEventListener("click", enviarFormulario);
span.addEventListener("click", cerrarModal);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}