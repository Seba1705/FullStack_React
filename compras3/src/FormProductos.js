import React, { Component} from 'react';

class FormProductos extends Component{
    
    submit = (e) => { 
        e.preventDefault();
        console.log(`Nombre: ${this.refs.nombre.value} Precio: ${this.refs.precio.value} Stock: ${this.refs.stock.value}`);

        const producto = {
            nombre : this.refs.nombre.value,
            precio : this.refs.precio.value,
            stock : this.refs.stock.value
        }

        this.props.evtCrearProducto(producto);

        this.refs.nombre.value = "";
        this.refs.precio.value = "";
        this.refs.stock.value = "";
    };

    render(){
        return(
            <form onSubmit={this.submit}>
                <input type="text" placeholder="Producto Nombre" ref="nombre"/> <br/>
                <input type="number" placeholder="Producto Precio" ref="precio"/> <br/>
                <input type="number" placeholder="Producto Stock" ref="stock"/> <br/>

                <button>Crear Producto</button>
                <hr/>
            </form>
        )
    }
}

export default FormProductos;