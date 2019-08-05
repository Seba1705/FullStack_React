import React, { Component } from 'react';
import Noticia from './Noticia';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types'

export default class Noticias extends Component {
    render() {
        return (
            <div className='row'>
                <TransitionGroup>
                    { 
                        this.props.noticias.map((noticia, i) =>
                        <CSSTransition key={i} timeout={500} className='fade'>
                            <Noticia noticia={noticia}/>
                        </CSSTransition> 
                    )}
                </TransitionGroup>
            </div>
        )
    }
}

Noticias.propTypes = {
    noticias : PropTypes.array.isRequired
}