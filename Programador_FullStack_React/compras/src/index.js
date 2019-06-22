import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// const JSX = <div>
//                 <h1>Hola mundo</h1>
//                 <p>Parrafo dentro de JSX</p>
//             </div>

//Componentes funcionales
// const JSX = () => <h1>Hola a todos!</h1>; 

// Componente de tipo clase
// class Hello extends React.Component{
//     //Utilizar metodo render
//     render(){
//         return <h1>Hello World!</h1>;
//     }
// }

// const Hola = () => <h1>Hola a todos!</h1>; 

class Producto extends Component{
    // ES6
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         cant : 0
    //     }
    // }

    // ES7
    state = {
        cant: 0,
        stock: this.props.stock
    }

    comprar = () =>{
        // console.log('Usted ha comprado este producto');
        this.state.stock === 0 ? console.log('No hay stock!') : this.setState({cant : this.state.cant + 1, stock: this.state.stock -1});              
    }

    mostrar = () => {
        //Evento personalzado
        this.props.evtMostrar(this.props.nombre);
    }

    render(){
        return(
            <div>
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

class ListaProductos extends Component{

    mostrarPoducto = (nombre) => console.log(`Ha seleccionado ${nombre}`);

    render(){
        return (
            <div>
                <Producto nombre='Iphone5' precio='200' stock={5} evtMostrar={this.mostrarPoducto} />
                <Producto nombre='Iphone6' precio='250' stock={7} />
                <Producto nombre='Iphone7' precio='300' stock={9} />
                <Total />
            </div>
        )
    }
}

class Total extends Component{
    render(){
        return(
            <div>
                <h3>Total: u$d3000</h3>
            </div>
        )
    }
}

ReactDOM.render(<ListaProductos/>, document.getElementById('root'));
// ReactDOM.render(<Hola/>, document.getElementById('root'));

