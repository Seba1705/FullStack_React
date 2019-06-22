$(function(){
    // EJERCICIO 1: Mostrar el texto “READY!” una vez que el documento HTML ha terminado de cargar.
    console.log('READY');
    
    // EJERCICIO 2: Crear un botón con el texto “Mostrar contenido oculto” y mediante el uso de eventos, hacer que al hacer clic sobre el mismo se muestre debajo un texto a elección.
    $('#btnMostrar').on({
        click:function(){
            $('#textoOculto').show();
            $(this).val('Presione doble click para ocultar texto');
        },
        dblclick:function(){
            $('#textoOculto').hide();
            $(this).val('Mostrar Texto');
        }
    });

    
    // EJERCICIO 3: Crear un párrafo con algún texto, y agregarlo al final del body una vez que el documento ha sido cargado en su totalidad (este contiene al menos dos <p>.
    $('.main').append('<p>Texto correspondiente al ejercicio 3 <br><br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto totam quae sapiente iure quos ducimus exercitationem incidunt aliquam, odio beatae fugiat nesciunt consequatur? Repellendus ea qui dolorem? Alias, voluptates est.</p><hr>')

    // EJERCICIO 4: Generar un HTML que contenga 4 párrafos de texto, luego, usando jQuery obtener todos los tags <p> y recorrerlos, asignándoles a cada uno un color de texto diferente.
    $('p.parrafo').each(function(i){
        $(this).addClass('clase' + i);
    })

    // EJERCICIO 6: Crear un check-box (el mismo podría ser para representar los términos y condiciones de una página web) y por defecto, dejar el botón submit desactivado. Al chequearlo, habilitar el botón para dejar al usuario hacer dicho submit.
    $('#chkActivar').on('change', function(){
        if($(this).prop('checked')){
            $('#btnMostrar').attr('disabled', false);
        }
        else{
            $('#btnMostrar').attr('disabled', true);
        }
    });

    $("input[type='button']").click(function(){
        switch(this.id){
            case 'btn-1':
                if($(this).attr('class') === 'rojo'){
                    $(this).removeClass('rojo');
                    $(this).addClass('verde');
                    $(this).val('Cambiame a rojo');
                }else{
                    $(this).removeClass('verde');
                    $(this).addClass('rojo');
                    $(this).val('Cambiame a verde');
                }
                break;
            case 'btn-2':
                if($(this).attr('class') === 'amarillo'){
                    $(this).removeClass('amarillo');
                    $(this).addClass('rojo');
                    $(this).val('Cambiame a Amarillo');
                }else{
                    $(this).removeClass('rojo');
                    $(this).addClass('amarillo');
                    $(this).val('Cambiame a Rojo');
                }
                break;
            case 'btn-3':
                if($(this).attr('class') === 'verde'){
                    $(this).removeClass('verde');
                    $(this).addClass('azul');
                    $(this).val('Cambiame a Verde');
                }else{
                    $(this).removeClass('azul');
                    $(this).addClass('verde');
                    $(this).val('Cambiame a Azul');
                }
                break;
            case 'btn-4':
                if($('#botones').attr('class') === 'fondoNegro'){
                    $('#botones').removeClass('fondoNegro');
                    $('#botones').addClass('fondoGris');
                    $(this).val('Cambiar fondo a Negro');
                }else{
                    $('#botones').removeClass('fondoGris');
                    $('#botones').addClass('fondoNegro');
                    $(this).val('Cambiar fondo a Gris');
                }
                break;
        }
    })
        

});


