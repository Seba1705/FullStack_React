import React, { Component} from 'react';

import Producto from './Producto';
import FormProductos from './FormProductos';
import Total from './Total';
import data from './data';

import './index.css';

class ListaProductos extends Component{

    state = {
        total : 0,
        stockProductos : data
    }

    mostrarPoducto = nombre => console.log(`Ha seleccionado ${nombre}`);

    calcularTotal = precio => { this.setState({total: this.state.total + precio })};

    crearProducto = producto => { this.setState({stockProductos: this.state.stockProductos.concat(producto)})};

    render(){
        let componente = this;
        let productos = this.state.stockProductos.map((producto, i) => {
            return(
                <Producto
                    nombre={producto.nombre} 
                    precio={producto.precio} 
                    stock={producto.stock} 
                    pic={producto.pic}
                    evtMostrar={ componente.mostrarPoducto } 
                    evtCalcularTotal={ componente.calcularTotal }  
                    key={i}
                />
            )
        });
        
        return (
            <div>
                <FormProductos
                    evtCrearProducto={this.crearProducto}
                />
                <div className='flex-container'>
                    {productos}
                </div>
                <Total total={this.state.total}/> 
            </div>
        )
    }
}

export default ListaProductos;
