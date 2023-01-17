import React, {useState} from "react"

export default function State(){
    const [count, setCount] = useState(0)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <h2>useState</h2>
            <div className="state-wrapper">
                <button className="state-decrement-button" onClick={decrement}>ー</button>
                <span className="state-span">{count}</span>
                <button className="state-increment-button" onClick={increment}>＋</button>
            </div>
        </>
)}