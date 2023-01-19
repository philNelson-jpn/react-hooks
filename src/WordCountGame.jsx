import React, {useState, useEffect, useRef, useContext} from "react"
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
    } = useWordGame(10)

    const hoverStyles = {
        outline: "4px solid hsl(120, 100%, 72%)",
        borderRadius: "4px"
    }

    const removeStyles = {
        outline: "",
        borderRadius: ""
    }

    function refSelect(){
        document.getElementById("textarea").style.outline = hoverStyles.outline
        document.getElementById("textarea").style.borderRadius = hoverStyles.borderRadius
    }

    function refDeSelect(){
        document.getElementById("textarea").style.outline = removeStyles.outline
        document.getElementById("textarea").style.borderRadius = removeStyles.borderRadius
    }
    
    return (
        <>
            <div className="title-wrapper">
                <h2>useState</h2>
                <h2>useEffect</h2>
                <h2>useContext</h2>
                <h2 onMouseEnter={refSelect} onMouseLeave={refDeSelect}>useRef</h2>
            </div>
            <div className="word-game-wrapper">
                <h2>Typing Game</h2>
                <textarea
                    id="textarea"
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
                        {timeRemaining === 0 || isTimeRunning ? "Try again" : "Start"}
                    </button>
                    <h3>Word count: {wordCount}</h3>
                </div>
            </div>
        </>
    )
}

export default WordCountGame
