import React, { Component } from 'react';

export default class Total extends Component{
    render(){
        return(
            <div className='total'>
                <h3>Total: u$d {this.props.total}</h3>
            </div>
        )
    }
}

