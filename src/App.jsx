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

import React from 'react'
import './App.css'
import Timer from './components/Timer'
import 'tachyons'

let hours = 0
let minutes = 0
let seconds = 60

// function TimerChoices(){
//     return(
//         <div>
//             <h1 mr3 red >Pick your poison...</h1>
//             <div>
//                 <button onClick={handleClick60s}>60sec</button>
//                 <button onClick={handleClick}>2min</button>
//                 <button onClick={handleClick}>3min</button>
//                 <button onClick={handleClick}>5min</button>
//                 <button onClick={handleClick}>10min</button>
//                 <button onClick={handleClick}>15min</button>
//                 <button onClick={handleClick}>30min</button>
//                 <button onClick={handleClick}>45min</button>
//                 <button onClick={handleClick}>60min</button>
//                 <button onClick={handleClick}>90min</button>
//                 <button onClick={handleClick}>180min</button>
//             </div>
//         </div>
//     )
// }


function App() {
  return (
    <>
        {/* <TimerChoices></TimerChoices> */}
        <Timer hr={hours} min={minutes} sec={seconds}></Timer>
    </>
  )
}

export default App
