import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {
    let [character, setCharacter] = useState({});

    const get = async () => {
        const response = await fetch(process.env.API);
        const data = await response.json();

        setCharacter(data.results[Math.floor(Math.random() * (19 - 0))]);
    }
    return (
        <main>
            <h1>characters</h1>
            { Object.keys(character).length > 0 && <><img src={character.image} alt='character' /> <h1>{character.name}</h1></>}
            <button onClick={get}>get character</button>
            <Link to='/dist/index.html'>Go back</Link>
        </main>
    );
}
 
export default Characters;