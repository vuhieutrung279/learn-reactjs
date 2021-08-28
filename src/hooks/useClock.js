import { useEffect, useState } from 'react';

function formatTime(time) {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return `${hour}:${minute}:${second}`;
}
function useClock() {
    const [timeString, setTimeString] = useState("");
    useEffect(() => {
        const timeClock = setInterval(() => {
            const newTime = new Date();
            setTimeString(formatTime(newTime))
        }, 1000);
        return () => {
            clearInterval(timeClock);
        }
    },[])
    return timeString
}

export default useClock;