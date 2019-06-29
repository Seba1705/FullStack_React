import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import ListaProductos from './ListaProductos';

class index extends Component{
    render(){
        return(
            <ListaProductos />
        )
    }
}

ReactDOM.render(<ListaProductos/>, document.getElementById('root'));