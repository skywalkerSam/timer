// Timer.jsx

import { useState, useEffect } from 'react'
import './Timer.css'

const Timer = ({ hr, min, sec }) => {
    const [over, setOver] = useState(false);
    const [paused, setPaused] = useState(true);
    const [[h, m, s], setTime] = useState([hr, min, sec]);

    // tick()
    const tick = () => {
        if (paused || over) {
            return;
        }
        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s === 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    // handleReset()
    const handleReset = () => {
        setTime([hr, min, sec]);
        setPaused(true);
        setOver(false);
    };

    // handlePause()
    const handlePause = () => setPaused(!paused);

    // fmt(), format timer values
    const fmt = (val) => val.toString().padStart(2, '0');

    // timer action
    useEffect(() => {
        let ticker = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(ticker);
        };
    });

    return (
        <>
            <div className='timer'>
                <h1
                    className="mr3 mt6 red hover-green">
                    {`${fmt(h)}:${fmt(m)}:${fmt(s)}`}
                </h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button
                    onClick={handlePause}
                    className="mr3 hover-red timer-buttons"
                >{paused ? 'Let\'s go...' : 'STOP...!'}
                </button>
                <button
                    onClick={handleReset}
                    className="mr3 red hover-green timer-buttons"
                >Fuck, Reset!
                </button>
            </div>
        </>
    );
};

export default Timer
