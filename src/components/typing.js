import React, { useEffect } from 'react'
import styles from './typing.module.css';

const type = (element, sentence) => {
    [...sentence].forEach((character, index) => {
        setTimeout(() => {
            document.querySelector(element).textContent += character;
        }, 100 * ++index);
    });
}

const Typing = () => {
    let message = "thetaru.github.io";
    useEffect(() => {
        type("#typing", message);
    }, [message]);
    return (
        <header>
            <div className="banner">
                <div className="banner-text">
                    <h1 id="typing"></h1>
                </div>
            </div>
        </header>
    )
}

export default Typing
