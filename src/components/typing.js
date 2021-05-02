import React, { useEffect } from 'react'
import styles from './typing.module.css';

const type = (element, sentence) => {
    let message = Array.from(sentence);
    message.forEach((character, index) => {
        setTimeout(() => {
            document.querySelector(element).textContent += character;
        }, 100 * (index + 1));
    });
}

const Typing = () => {
    let message = 'Welcome to my homepage'
    useEffect(() => {
        type('#typing', message);
    }, [message]);
    return (
        <header>
            <div className="banner">
                <div className="banner-text">
                    <h1 id='typing'></h1>
                </div>
            </div>
        </header>
    )
}

export default Typing
