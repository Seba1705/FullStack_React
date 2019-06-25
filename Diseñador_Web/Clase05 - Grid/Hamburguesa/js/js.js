window.addEventListener("load", function(){         //Funcion anonima
    var btn= $("btn");
    btn.addEventListener("click", mostar);
    var btnCerrar = $("btnCerrar");
    btnCerrar.addEventListener("click", cerrar);
});

function $(id)
{
    var elemento = document.getElementById(id);
    return elemento;
}

function guardar()
{
    var name = $("name").value;
    var lastname = $("lastname").value;
    if(name == "" || lastname == "")
    {
        alert("Ingrese nombre y apellido");
        $("name").classname = "error";
        $("lastname").classname = "error";
        return;
    }
    if(confirm("Seguro desea agregar persona?") == true)
    {
        $("name").classname = "sinError";
        $("lastname").classname = "sinError";
        var tbody = $("tbody");
        tbody.innerHTML += "<tr><td>"+ name+"</td>"+"<td>"+ lastname+"</td>"+"<td>"+"<a href=''>borrar</a>" + "</td></tr>";
    }
}

function mostar(){
    var hamburguesa = $("hamburguesa");
    var btn = $("btn");
    btn.hidden = true;
    hamburguesa.className = "hamburguesa";

}

function cerrar(){
    var hamburguesa = $("hamburguesa");
    var btn = $("btn");
    btn.hidden = false;
    hamburguesa.className = "hidden";
}