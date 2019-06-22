var url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function peticionFetch(){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        manipularObjetoJson(response);
    })
    .catch(function(error){
        console.log('Se ha producido un error')
    });
}

function peticionJquery(){
    $.get(url, function(response){
        manipularObjetoJson(response);
    });
}

function manipularObjetoJson(objJson){
    let objeto = objJson.members,
        names = [],
        ages = [],
        powers = [],
        identities = [];

    $('.container-heroes').append("<div class='tittle'>Heroe 1</div><div class='tittle'>Heroe 2</div><div class='tittle'>Heroe 3</div>");
    console.log(objeto);
    objeto.forEach(element => {
        names.push(element.name);
        ages.push(element.age);  
        powers.push(element.powers);
        identities.push(element.secretIdentity);               
    });
    
    $('.container-heroes').append('<div>'+names[0]+'</div><div>'+names[1]+'</div><div>'+names[2]+'</div>');
    $('.container-heroes').append('<div>'+identities[0]+'</div><div>'+identities[1]+'</div><div>'+identities [2]+'</div>');
    $('.container-heroes').append('<div>'+ages[0]+'</div><div>'+ages[1]+'</div><div>'+ages [2]+'</div>');
    $('.container-heroes').append('<div>'+powers[0]+'</div><div>'+powers[1]+'</div><div>'+powers [2]+'</div>');
}

$(function(){
    peticionFetch();
    // $('#btn-enviar').click(cambiarPregunta);
    // hacerPreguntas(arrPreguntas);
});

/**************************************************************************************************/

function hacerPreguntas(array){ 
    let contImg = $('#image'),
        contOpcion1 = $('#label-1'),
        contOpcion2 = $('#label-2'),
        contOpcion3 = $('#label-3');
}

function cambiarPregunta(){
    console.log('Cambiar pregunta');
}