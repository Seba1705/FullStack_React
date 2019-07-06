import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';

export default class App extends Component {

    state = {
        noticias : []
    }
 
    componentDidMount(){
        this.consultarNoticias('general');
    }

    consultarNoticias = (categoria = 'general') => {
        let url = `https://newsapi.org/v2/top-headlines?country=ar&apiKey=d1b33740d308458fb9e60c828b99d6ef&category=${categoria}`,
            req = new Request(url);
        fetch(req)
            .then( response => {
                return response.json();
            })
            .then(noticias => {
                this.setState({ noticias : noticias.articles });
            })   
    }; 

    render() {
        return (
            <div className='contenedor-app'>
                <Header titulo='Noticias de Argentina'/>
                <div className='container white contenedor-noticias'>
                    <Formulario consultarNoticias={this.consultarNoticias}/>
                    <Noticias noticias={this.state.noticias}/>
                </div>
            </div>
        )
    }
}
