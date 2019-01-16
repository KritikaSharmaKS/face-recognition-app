import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
//import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '2px', width: '150px', height: 'auto'}} src="http://hanatemplate.com/images/winking-face-gif-1.gif" alt="logo"/> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;