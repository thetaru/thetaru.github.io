import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';

const Background = () => {
    return (
        <div>
            <Particles height="80vh" width="100vw" params={particlesConfig} />
        </div>
    )
}

export default Background
