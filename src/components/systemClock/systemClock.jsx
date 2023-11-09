import React, {useEffect, useState} from 'react';
import {DisplayDate, WrapperDate} from "./systemClock.styles";

const SystemClock = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, []);

    const timeString = currentDateTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    })

    const dateString = currentDateTime.toLocaleDateString()

    return (
        <WrapperDate>
            <DisplayDate>{timeString}</DisplayDate>
            <DisplayDate>{dateString}</DisplayDate>
        </WrapperDate>
    );
};

export default SystemClock;