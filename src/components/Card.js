import React from 'react';
import '../styles.css';

const Card = ({ image, name, text }) => {
    return (
        <li className='card'>
            <div className='image-container'>
                <img src={image} alt="headshot" />
            </div>
            <div>
                <p className='name'>{ name }</p>
                <a className='role' href={ text[0] }>github</a>
                <a className='role' href={ text[1] }>linkedin</a>
            </div>
        </li>
    )
}

export default Card;