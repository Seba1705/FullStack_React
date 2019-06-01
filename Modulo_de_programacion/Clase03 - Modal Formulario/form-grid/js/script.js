function $(id){
    return document.getElementById(id);
}

var btnEnviar = $("btn-send"),
    modal = $("modal-container"),
    barrios = ["Agronomía",
"Almagro",
"Balvanera",
"Barracas",
"Belgrano",
"Boedo",
"Caballito",
"Chacarita",
"Coghlan",
"Colegiales",
"Constitución",
"Flores",
"Floresta",
"La BocaLa Paternal",
"Liniers",
"Mataderos",
"Monte Castro",
"Monserrat",
"Nueva Pompeya",
"Núñez",
"Palermo",
"Parque Avellaneda",
"Parque Chacabuco",
"Parque Chas",
"Parque Patricios",
"Puerto Madero",
"Recoleta",
"Retiro",
"Saavedra",
"San Cristóbal",
"San Nicolás",
"San Telmo",
"Vélez Sársfield",
"Versalles",
"Villa Crespo",
"Villa del Parque",
"Villa Devoto",
"Villa General Mitre",
"Villa Lugano",
"Villa Luro",
"Villa Ortúzar",
"Villa Pueyrredón",
"Villa Real",
"Villa Riachuelo",
"Villa Santa Rita",
"Villa Soldati",
"Villa Urquiza"];
    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        ocultarModal();
    }
}

//Validaciones

function validarTexto(texto){ 
    let regText = new RegExp(/^[a-z\s]{1,20}$/i);
    if(texto === "" || texto.length > 20 || !regText.test(texto)){
        return false;
    }
    return true;
}

function validarEmail(email){ 
    let regMail = new RegExp(/^\w@\w.[aA-zZ]{1-4}(.[aA-zZ]{1-3})$/i);
    if(email === "" || email.length > 100 || !regMail.test(email)){
        return false;
    }
    return true;
}


//Enviar formulario

function enviarFormulario(e){
    let name = $('input-name'),
        lastname = $('input-lastname'),
        tipo = $('input-social').checked ? 'Redes Sociales' : 'Personal',
        barrio = $('input-barrio').value,
        email = $('input-contact');

    if(validarTexto(name.value)){
        if(validarTexto(lastname.value)){
            if(validarEmail(email.value)){
                e.preventDefault();
                //Cargo los campos del modal
                $('modal-name').textContent = name.value;
                $('modal-lastname').textContent = lastname.value;
                $('modal-type').textContent = tipo;
                $('modal-barrio').textContent = barrio;
                $('modal-contact').textContent = email.value;
                //Borro los input
                name.value = "";
                lastname.value = "";
                email.value = "";
                //Muestro el modal
                mostrarModal(); 
            } 
        }
    }
    else{
        name.setCustomValidity('Ingresar nombre');
        lastname.setCustomValidity('Ingrese su apellido');
        email.setCustomValidity('Ingrese su email');
    } 
}

//Manejador de eventos

btnEnviar.addEventListener("click", enviarFormulario);

//Cargar la lista en el select

function cargarBarrios(barrios){
    let selector = $('input-barrio');
    barrios.forEach(element => {
        let item = document.createElement('option');
        item.textContent = element;
        selector.appendChild(item);
    });
}

cargarBarrios(barrios);

// Mostrar y ocultar modal

function mostrarModal() {
    $('modal-container').style.display = 'flex';
}

function ocultarModal() {
    $('modal-container').style.display = 'none';
}