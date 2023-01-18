import React, {useState, useEffect, useRef} from "react"
import useWordGame from "./custom-hooks/useWordGame"

function WordCountGame() {
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useWordGame(5)
    
    return (
        <>
            <h2>Typing Game</h2>
            <div className="word-game-wrapper">
                <textarea
                    ref={textBoxRef}
                    onChange={handleChange}
                    value={text}
                    disabled={!isTimeRunning}
                />
                <div className="control-wrapper">
                    <h3>Time remaining: {timeRemaining}</h3>
                    <button 
                        onClick={startGame}
                        disabled={isTimeRunning}
                    >
                        Start
                    </button>
                    <h3>Word count: {wordCount}</h3>
                </div>
            </div>
        </>
    )
}

export default WordCountGame
