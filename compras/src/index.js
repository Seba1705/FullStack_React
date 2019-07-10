import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import ListaProductos from './ListaProductos';

class Index extends Component{
    render(){
        return(
            <ListaProductos />
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));