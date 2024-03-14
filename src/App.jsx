/*
DEV: @skywalkerSam
Purpose: Countdown Timer
Stardate: 12024.03.14.1433
*/
/* TODOs:
- Custom timer choices
- Completion animation
- Fancy primary buttons
- Black Panther theme: `ftimer` - Fancy Timer
*/

import React, { useState } from 'react'
import './App.css'
import Countdown from './components/Countdown'
import 'tachyons'


function App() {
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [hours, setHours] = useState(0);
    return (
        <>
            <div>
                <h1 className='mr3 red' >Pick your poison...</h1>
                <div className='mr3'>
                    <button
                        className='countdown-buttons'
                        onClick={() => setSeconds(30)}>
                        30sec
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setSeconds(60)}>
                        60sec
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setMinutes(2)}>
                        2min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setMinutes(3)}>
                        3min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setMinutes(5)}>
                        5min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setMinutes(10)}>
                        10min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setMinutes(15)}>
                        15min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setMinutes(30)}>
                        30min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setMinutes(45)}>
                        45min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setHours(1)}>60min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setHours(2)}>120min
                    </button>
                    <button
                        className='countdown-buttons'
                        onClick={() => setHours(3)}>180min
                    </button>
                </div>
            </div>
            {seconds !== 0 || minutes !== 0 || hours !== 0 ?
                <Countdown
                    sec={seconds} min={minutes} hr={hours}>
                </Countdown>
                : null
            }
        </>
    )
}

export default App
