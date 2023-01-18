import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import State from './most-common-hooks/State'
import Effect from './most-common-hooks/Effect'
import WordCountGame from './WordCountGame'
import UseContextComponent from './most-common-hooks/UseContextComponent'

function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <div className='grid-wrapper'>
        <State />
        <Effect />
        <UseContextComponent />
      </div>
        <WordCountGame />
    </>
  )
}

export default App
