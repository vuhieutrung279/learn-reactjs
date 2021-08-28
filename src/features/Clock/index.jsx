import React, { useEffect } from 'react';
import productApi from '../../api/productApi';
import useClock from '../../hooks/useClock';
import useMagicColor from '../../hooks/useMagicColor';
import './style.scss';
function Clock() {
    const timeString = useClock();
    const { color } = useMagicColor();
    useEffect(() => {
        (async () => {
            const dataProduct = await productApi.getAll();
            console.log(dataProduct);
            const itemProduct = await productApi.remove(31397093);
            console.log(itemProduct);
        })()
    }, [])
    return (
        <div>
            {timeString + "time"}
            <p className="box" style={{backgroundColor: color}}></p>
        </div>
    );
}

export default Clock;