import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Formulario extends Component {
   
    categoriaRef = new React.createRef();

    cambiarCategoria = e => {
       e.preventDefault();
       this.props.consultarNoticias(this.categoriaRef.current.value);
   }

    render() {
        return (
            <div className='buscador row'>
                <div className='col s12 m8 offset-m2'>
                    <form onSubmit={this.cambiarCategoria}>
                        <h2>Noticias por categoria</h2>
                        <div className='input-field col s12 l8'>
                            <select className='browser-default' ref={this.categoriaRef}>
                                <option value='general' defaultValue>General</option>
                                <option value='business'>Negocios</option>
                                <option value='entertainment'>Entretenimiento</option>
                                <option value='health'>Salud</option>
                                <option value='science'>Ciencias</option>
                                <option value='sports'>Deportes</option>
                                <option value='technology'>Tecnologia</option>
                            </select>
                        </div>
                        <div className='input-field col s12 m4 enviar'>
                            <input type='submit' value='Buscar' className='btn amber darken-2'/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}