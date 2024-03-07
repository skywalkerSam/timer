/*
DEV: @skywalkerSam
Purpose: Timer Application
Stardate: 12024.03.07.1047
*/
/* TODOs:
- Custom timer input
- Sound on timer completion
- Timer completion message
- Black Panther theme

*/

import React from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  return (
    <>
      <Timer hr={0} min={2} sec={0}></Timer>
    </>
  )
}

export default App
