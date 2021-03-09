import React from 'react';
import image from '@img/imagen.jpg';
import { Link } from 'react-router-dom';
import '@styles/main.scss';

const Main = () => {
    return (
        <main>
            <h1>TITLE</h1>
            <img src={image} alt='imagen' />
            <Link to='/characters'>Characters</Link>
        </main>
    );
}

export default Main;