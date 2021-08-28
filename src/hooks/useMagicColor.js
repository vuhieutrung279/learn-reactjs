import { useEffect, useState } from 'react';
function randomColor() {
    const listColor = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const color = Math.trunc(Math.random() * listColor.length);
    return listColor[color];
}
function useMagicColor() {
   
    const [color, setColor] = useState();
    useEffect(() => {
        const colorChange = setInterval(() => {
            const newColor = randomColor();
            setColor(newColor)
        }, 1000);
        return () => {
            clearInterval(colorChange);
        }
    },[])
    return {color};
}

export default useMagicColor;