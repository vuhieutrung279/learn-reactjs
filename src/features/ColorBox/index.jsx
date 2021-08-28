import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const arrColor = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const oldColor = useRef('deeppink');
    const [color, setColor] = useState(() => {
        return oldColor.current || arrColor[0];
    });
    function changeColor() {
        const randomColor = Math.floor(Math.random() * arrColor.length);
        setColor(arrColor[randomColor]);
        // localStorage.setItem('color', arrColor[randomColor]); 
        oldColor.current = arrColor[randomColor];
    }
    return (
        <div className="color-box" style={{backgroundColor: color}} onClick={() => changeColor()}></div>
    );
}

export default ColorBox;