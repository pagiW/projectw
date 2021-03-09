import React from 'react';
import image from '@img/imagen.jpg';
import '@styles/main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <h1>TITLE</h1>
            <img src={image} alt='imagen' />
            <Link to='/dist/index.html/characters'>Characters</Link>
        </main>
    );
}

export default Main;