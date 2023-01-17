import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import State from './most-common-hooks/State'
import Effect from './most-common-hooks/Effect'

function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <div className='grid-wrapper'>
        <State />
        <Effect />
      </div>
    </>
  )
}

export default App
