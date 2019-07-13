import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='link-container'>
                <Link className='link' to='Home'>Home</Link>
            </div>
            <div className='link-container'>
                <Link className='link' to='Productos'>Productos</Link>
            </div>
            <div className='link-container'>
                <Link className='link' to='Servicios'>Servicios</Link>
            </div>
            <div className='link-container'>
                <Link className='link' to='Contacto'>Contacto</Link>
            </div>
        </nav>
    )
}
