import React, { Component } from 'react';

export default class Productos extends Component {
    render() {
        return (
            <div style={ {color:'red', fontSize:28} }>
            <h1>{ this.props.nombre } -- E-Commerce</h1>
        </div>
        )
    }
}
