import React, {Component} from 'react';

class Producto extends Component{
    state = {
        cant: 0,
        stock: this.props.stock
    }

    comprar = () =>{
        console.log('Usted ha comprado este producto');
        this.state.stock === 0 ? console.log('No hay stock!') : this.setState({ cant : this.state.cant + 1, 
                                                                                    stock: this.state.stock -1 })
                                                                                    this.props.evtCalcularTotal(this.props.precio);     
    }

    mostrar = () => {
        //Evento personalzado
        this.props.evtMostrar(this.props.nombre);
    }

    render(){
        return(
            <div className='producto'>
                <img src={this.props.pic} alt=""/>
                <p>{this.props.nombre} - u$s{this.props.precio}</p>
                <p>Stock: {this.state.stock}</p>
                <button onClick={this.comprar}>Comprar</button>
                <button onClick={this.mostrar}>Mostrar</button>
                <h2>Cantidad: {this.state.cant} item(s)</h2>
                <hr/>
            </div>
        )
    }
}

export default Producto;