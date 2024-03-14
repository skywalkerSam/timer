// Countdown.jsx

import { useState, useEffect } from 'react'
import './Countdown.css'

// Countdown Component
function Countdown(props) {
    // States
    let [over, setOver] = useState(false)
    let [paused, setPause] = useState(true)
    let [[h, m, s], setTime] = useState([props.hr, props.min, props.sec])


    // Tick
    function tick() {
        // console.log(over, paused)

        if (paused || over) {
            return null
        } else if (h === 0 && m === 0 && s === 0) {
            setOver(true)
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59])
        } else if (s === 0) {
            setTime([h, m - 1, 59])
        } else {
            setTime([h, m, s - 1])
        }
    }

    // Pause
    function handlePause() {
        setPause(!paused)
    }

    // Reset
    function resetCountdown() {
        setTime([props.hr, props.min, props.sec])
        setPause(true)
        setOver(false)
    }

    // Format time values to `00:00:00`
    function formatValues(values) {
        return values.toString().padStart(2, '0')
    }

    // useEffect, 1000ms
    useEffect(() => {
        let ticker = setInterval(() => tick(), 1000)
        return (() => {
            clearInterval(ticker)
        })
    })

    return (
        <>
            <div className='countdown'>
                <h1 className="mr3 mt6 red hover-green">
                    {formatValues(h)}:{formatValues(m)}:{formatValues(s)}
                </h1>
            </div>

            <div>
                <button
                    onClick={handlePause}
                    className="mr3 hover-red countdown-buttons">
                    {paused ? 'Let\'s go...' : 'STOP!'}
                </button>

                <button
                    onClick={resetCountdown}
                    className="mr3 red hover-green countdown-buttons">
                    Fuck, Reset!
                </button>
            </div>
        </>
    );
};

export default Countdown
