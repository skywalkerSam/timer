/*
DEV: @skywalkerSam
Purpose: Timer Application
Stardate: 12024.03.07.1047
*/
/* TODOs:
- Timer choices
- Sound on timer completion
- Timer completion message
- Black Panther theme: ftimer - Fancy Timer

*/

import React, { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import 'tachyons'


function App() {
    // You can't define states like this outside the function body...!
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [hours, setHours] = useState(0);
    return (
        <>
            <div>
                <h1 className='mr3 red' >Pick your poison...</h1>
                <div className='mr3'>
                    <button
                        className='timer-buttons'
                        onClick={() => setSeconds(30)}>
                        30sec
                    </button>
                    <button
                        className='timer-buttons'
                        onClick={() => setSeconds(60)}>
                        60sec
                    </button>
                    <button
                        className='timer-buttons'
                        onClick={() => setMinutes(2)}>
                        2min
                    </button>
                    <button
                        className='timer-buttons'
                        onClick={() => setMinutes(3)}>
                        3min
                    </button>
                    <button
                        className='timer-buttons'
                        onClick={() => setMinutes(5)}>
                        5min
                    </button>
                    {/* <button
                        className='timer-buttons'
                        onClick={() => setMinutes(10)}>
                        10min
                    </button> */}
                    <button
                        className='timer-buttons'
                        onClick={() => setMinutes(15)}>
                        15min
                    </button>
                    <button
                        className='timer-buttons'
                        onClick={() => setMinutes(30)}>
                        30min
                    </button>
                    <button
                        className='timer-buttons'
                        onClick={() => setMinutes(45)}>
                        45min
                    </button>
                    <button
                        className='timer-buttons'
                        onClick={() => setHours(1)}>60min
                    </
                    button>
                    <button
                        className='timer-buttons'
                        onClick={() => setHours(2)}>120min
                    </
                    button>
                    <button
                        className='timer-buttons'
                        onClick={() => setHours(3)}>180min
                    </
                    button>
                </div>
            </div>
            {seconds !== 0 || minutes !== 0 || hours !== 0 ?
                <Timer sec={seconds} min={minutes} hr={hours} /> : null
            }
        </>
    )
}

export default App
