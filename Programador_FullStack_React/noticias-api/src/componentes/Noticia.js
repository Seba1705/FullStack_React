import React from 'react';
import PropTypes from 'prop-types'


export default function Noticia(props) {

    const { urlToImage, url, title, description, source } = props.noticia;

    return (
        <div className='col s12 m6 l4'>
            <div className='card hoverable medium'>
                <div className='card-image'>
                    <img alt={title} src={urlToImage}/>
                    <span className='card-title'>{source.nombre}</span>
                </div>
                <div className='card-content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='card-action'>
                    <a href={url} target='window.opener'>Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}

// Noticia.propTypes = {
//     noticia : PropTypes.shape({
//         urlToImage : PropTypes.string,
//         url : PropTypes.string,
//         title : PropTypes.string,
//         description : PropTypes.string,
//         source : PropTypes.object
//     })
// }