import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Productos from './Productos/Productos';
import Servicios from './Servicios/Servicios';
import Contacto from './Contacto/Contacto';
import PageError from './PageError/PageError';

function App() {
    return (
        <BrowserRouter className="App">
            <div className='App'>

                {/* <Redirect from='/' to='/home' /> */}
                <Navbar/>

                <Switch>

                    <Route path='/' exact component={Home}/>
                    <Route path='/productos' exact render={ () => <Productos nombre='Productos' /> }/>
                    <Route path='/servicios' exact render={ () => <Servicios/> }/>
                    <Route path='/contacto' exact render={ () => <Contacto /> }/>
                    <Route component={PageError} />

                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
